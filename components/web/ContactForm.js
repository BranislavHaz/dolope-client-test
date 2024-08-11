import React, { useRef, useState, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postContactForm } from "@/utils/web/postContactForm";
import Spinner from "./Spinner";
import ConfettiAnimation from "../ConfettiAnimation";
import * as Yup from "yup";
import * as $ from "@/styles/web/components/ContactForm.styled";

const FileInput = ({ onFilesAdded }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files);
      onFilesAdded(newFiles);
    }
    event.target.value = ""; // Reset input value
  };

  return (
    <div>
      <$.UploadButton
        type="button"
        onClick={() => fileInputRef.current.click()}
      >
        Vyberte soubory
      </$.UploadButton>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
        accept=".jpg, .jpeg, .png, .pdf"
      />
    </div>
  );
};

const ContactForm = () => {
  const [isDragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimitError, setFileLimitError] = useState("");
  const [contactStatus, setContactStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];
  const MAX_FILES = 3;
  const MAX_SIZE_MB = 15;

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Povinné pole"),
    email: Yup.string().email("Neplatný e-mail").required("Povinné pole"),
    message: Yup.string().required("Povinné pole"),
    phone: Yup.string(),
    attachments: Yup.array()
      .of(
        Yup.mixed()
          .test("fileFormat", "Nepovolený formát souboru", (file) =>
            SUPPORTED_FORMATS.includes(file?.type)
          )
          .test(
            "fileSize",
            "Soubor je příliš velký",
            (file) => file?.size <= MAX_SIZE_MB * 1024 * 1024
          )
      )
      .max(MAX_FILES, `Maximálně ${MAX_FILES} soubory`),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("message", values.message);

    for (let i = 0; i < values.attachments.length; i++) {
      formData.append("attachments", values.attachments[i]);
    }

    // Poslanie formulára cez FormData
    await postContactForm(formData, setContactStatus);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "submitContactForm",
      form_name: "Contact Form",
    });

    setIsSubmitting(false);
    setSubmitting(false);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    setDragActive(true);
  };

  const handleDrop = (e, setFieldValue) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const newFiles = Array.from(e.dataTransfer.files);
    if (uploadedFiles.length + newFiles.length > MAX_FILES) {
      setFileLimitError(`Můžete nahrát pouze ${MAX_FILES} soubory.`);
    } else {
      setFileLimitError("");
      const updatedFiles = [...uploadedFiles, ...newFiles].slice(0, MAX_FILES);
      setFieldValue("attachments", updatedFiles);
      setUploadedFiles(updatedFiles);
      e.dataTransfer.clearData();
    }
  };

  const handleFilesAdded = useCallback(
    (newFiles, setFieldValue) => {
      if (uploadedFiles.length + newFiles.length > MAX_FILES) {
        setFileLimitError(`Můžete nahrát pouze ${MAX_FILES} soubory.`);
      } else {
        setFileLimitError("");
        const updatedFiles = [...uploadedFiles, ...newFiles].slice(
          0,
          MAX_FILES
        );
        setUploadedFiles(updatedFiles);
        setFieldValue("attachments", updatedFiles);
      }
    },
    [uploadedFiles]
  );

  const handleFileRemove = (index, setFieldValue) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
    setFieldValue("attachments", updatedFiles);
    setFileLimitError(""); // Clear error message when a file is removed
  };

  return (
    <$.FormWrapper $isSend={contactStatus}>
      <Spinner isSubmitting={isSubmitting} />
      <ConfettiAnimation isDisplay={contactStatus} />
      <$.TextIsSendWrap>
        <$.TextIsSend>Vaše zpráva byla úspěšně odeslána! 🎉</$.TextIsSend>
        <$.TextIsSend>Budeme Vás kontaktovat do 24 hodin.</$.TextIsSend>
      </$.TextIsSendWrap>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          message: "",
          phone: "",
          attachments: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <$.FormField>
              <label>Jméno *</label>
              <Field type="text" name="fullName" />
              <ErrorMessage name="fullName" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>E-mail *</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>Telefonní číslo</label>
              <Field type="text" name="phone" />
            </$.FormField>

            <$.FormField>
              <label>Zpráva *</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>Příloha</label>
              <$.FileDropArea
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, setFieldValue)}
                $isActive={isDragActive}
              >
                <$.UploadMessage>Sem přetáhněte soubory nebo</$.UploadMessage>
                <FileInput
                  onFilesAdded={(files) =>
                    handleFilesAdded(files, setFieldValue)
                  }
                />
                <$.UploadDescription>
                  Povoleny jsou formáty .jpg, .jpeg, .png, .pdf v celkové
                  velikosti max. 15 MB
                </$.UploadDescription>
              </$.FileDropArea>

              {fileLimitError && <$.ErrorText>{fileLimitError}</$.ErrorText>}

              {uploadedFiles.length > 0 && (
                <$.UploadedFilesList>
                  {uploadedFiles.map((file, index) => (
                    <$.UploadedFile key={index}>
                      {file.name}
                      <$.RemoveFileButton
                        type="button"
                        onClick={() => handleFileRemove(index, setFieldValue)}
                      >
                        &times;
                      </$.RemoveFileButton>
                    </$.UploadedFile>
                  ))}
                </$.UploadedFilesList>
              )}

              <ErrorMessage name="attachments" component={$.ErrorText} />
            </$.FormField>

            <$.SubmitButton type="submit" disabled={isSubmitting}>
              Odeslat
            </$.SubmitButton>
          </Form>
        )}
      </Formik>
    </$.FormWrapper>
  );
};

export default ContactForm;
