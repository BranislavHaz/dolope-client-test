import Link from "next/link";
import ConfettiExplosion from "react-confetti-explosion";
import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postContactForm } from "@/utils/web/postContactForm";
import Spinner from "../../Spinner";
import Button from "@/components/Button";
import * as Yup from "yup";
import * as $ from "@/styles/web/homepage/ContactForm.styled";

const ContactForm = ({ translations: t }) => {
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
    firstName: Yup.string().required(t.form.errors.required),
    lastName: Yup.string().required(t.form.errors.required),
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
    consent: Yup.bool().oneOf([true], t.form.errors.consent_required), // Validation for consent checkbox
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("message", values.message);

    for (let i = 0; i < values.attachments.length; i++) {
      formData.append("attachments", values.attachments[i]);
    }

    // Poslanie formulára cez FormData
    await postContactForm(formData, setContactStatus);

    setIsSubmitting(false);
    setSubmitting(false);
  };

  const handleFilesAdded = (newFiles, setFieldValue) => {
    const validFiles = newFiles.filter((file) => {
      const isValidFormat = SUPPORTED_FORMATS.includes(file.type);
      const isValidSize = file.size <= MAX_SIZE_MB * 1024 * 1024;
      return isValidFormat && isValidSize;
    });

    if (validFiles.length !== newFiles.length) {
      alert(
        "Niektoré súbory prekročili maximálnu povolenú veľkosť 15 MB alebo majú nepodporovaný formát."
      );
    }

    if (uploadedFiles.length + validFiles.length > MAX_FILES) {
      setFileLimitError(`${t.form.errors.max_files}: ${MAX_FILES}.`);
    } else {
      setFileLimitError("");
      const updatedFiles = [...uploadedFiles, ...validFiles].slice(
        0,
        MAX_FILES
      );
      setUploadedFiles(updatedFiles);
      setFieldValue("attachments", updatedFiles);
    }
  };

  const handleFileRemove = (index, setFieldValue) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
    setFieldValue("attachments", updatedFiles);
    setFileLimitError(""); // Clear error message when a file is removed
  };

  const FileInput = ({ onFilesAdded }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
      if (event.target.files.length > 0) {
        const newFiles = Array.from(event.target.files);
        const validFiles = newFiles.filter((file) =>
          SUPPORTED_FORMATS.includes(file.type)
        );

        if (validFiles.length !== newFiles.length) {
          alert("Nepovolený typ súboru bol vynechaný.");
        }

        onFilesAdded(validFiles);
      }
      event.target.value = ""; // Reset input value
    };

    return (
      <div>
        <Button
          outline
          lg
          as="button"
          type="button"
          onClick={() => fileInputRef.current.click()}
        >
          {t.form.upload_button}
        </Button>
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

  return (
    <$.FormWrapper $isSend={contactStatus}>
      <Spinner isSubmitting={isSubmitting} />
      <>
        {contactStatus && (
          <ConfettiExplosion
            force={0.8}
            duration={4000}
            particleCount={250}
            width={1600}
          />
        )}
      </>
      <$.TextIsSendWrap>
        <$.TextIsSend>{t.form.success.title}</$.TextIsSend>
        <$.TextIsSend>{t.form.success.description}</$.TextIsSend>
      </$.TextIsSendWrap>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          phone: "",
          attachments: [],
          consent: false, // Initial value for consent
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, errors, touched }) => (
          <Form>
            <$.FormField>
              <label>{`${t.form.first_name} *`}</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>{`${t.form.last_name} *`}</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component={$.ErrorText} />
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
              <FileInput
                onFilesAdded={(files) => handleFilesAdded(files, setFieldValue)}
              />

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

            <$.FormField $isError={errors.consent && touched.consent}>
              <label>
                <$.ConsentWrap>
                  <Field type="checkbox" name="consent" />
                  <$.ConsentText>
                    {t.form.consent_text}{" "}
                    <Link href="/gdpr" target="_blank">
                      {t.form.consent_text_link}
                    </Link>
                    . *
                  </$.ConsentText>
                </$.ConsentWrap>
              </label>
            </$.FormField>

            <Button
              primary
              lg
              as="button"
              type="submit"
              w="100%"
              disabled={isSubmitting}
            >
              {t.form.submit_button}
            </Button>
          </Form>
        )}
      </Formik>
    </$.FormWrapper>
  );
};

export default ContactForm;
