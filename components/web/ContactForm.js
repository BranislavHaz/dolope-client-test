import React, { useRef, useState, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postContactForm } from "@/utils/web/postContactForm";
import Spinner from "./Spinner";
import ConfettiAnimation from "../ConfettiAnimation";
import * as Yup from "yup";
import * as $ from "@/styles/web/components/ContactForm.styled";

const ContactForm = ({ translations: t }) => {
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
          {t.form.upload_button}
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

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t.form.errors.required),
    email: Yup.string()
      .email(t.form.errors.wrong_email)
      .required(t.form.errors.required),
    message: Yup.string().required(t.form.errors.required),
    phone: Yup.string(),
    attachments: Yup.array()
      .of(
        Yup.mixed()
          .test("fileFormat", t.form.errors.wrong_format, (file) =>
            SUPPORTED_FORMATS.includes(file?.type)
          )
          .test(
            "fileSize",
            t.form.errors.big_file,
            (file) => file?.size <= MAX_SIZE_MB * 1024 * 1024
          )
      )
      .max(MAX_FILES, `${t.form.errors.max_files}: ${MAX_FILES}.`),
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
      setFileLimitError(`${t.form.errors.max_files}: ${MAX_FILES}.`);
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
        setFileLimitError(`${t.form.errors.max_files}: ${MAX_FILES}.`);
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
        <$.TextIsSend>{t.form.success.title}</$.TextIsSend>
        <$.TextIsSend>{t.form.success.description}</$.TextIsSend>
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
              <label>{`${t.form.name} *`}</label>
              <Field type="text" name="fullName" />
              <ErrorMessage name="fullName" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>{`${t.form.email} *`}</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>{t.form.phone}</label>
              <Field type="text" name="phone" />
            </$.FormField>

            <$.FormField>
              <label>{`${t.form.message} *`}</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>{t.form.attachment}</label>
              <$.FileDropArea
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, setFieldValue)}
                $isActive={isDragActive}
              >
                <$.UploadMessage>{t.form.upload_message}</$.UploadMessage>
                <FileInput
                  onFilesAdded={(files) =>
                    handleFilesAdded(files, setFieldValue)
                  }
                />
                <$.UploadDescription>
                  {t.form.upload_description}
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
              {t.form.submit_button}
            </$.SubmitButton>
          </Form>
        )}
      </Formik>
    </$.FormWrapper>
  );
};

export default ContactForm;
