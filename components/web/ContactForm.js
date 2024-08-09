import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as $ from "@/styles/web/components/ContactForm.styled";

const ContactForm = () => {
  const fileInputRef = useRef(null);
  const [isDragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimitError, setFileLimitError] = useState("");

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];
  const MAX_FILES = 3;
  const MAX_SIZE_MB = 15;

  const validationSchema = Yup.object({
    jmeno: Yup.string().required("Povinné pole"),
    email: Yup.string().email("Neplatný e-mail").required("Povinné pole"),
    zprava: Yup.string().required("Povinné pole"),
    telefon: Yup.string(),
    priloha: Yup.array()
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

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
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
      setFieldValue("priloha", updatedFiles);
      setUploadedFiles(updatedFiles);
      e.dataTransfer.clearData();
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event, setFieldValue) => {
    const newFiles = Array.from(event.currentTarget.files);
    if (uploadedFiles.length + newFiles.length > MAX_FILES) {
      setFileLimitError(`Můžete nahrát pouze ${MAX_FILES} soubory.`);
    } else {
      setFileLimitError("");
      const updatedFiles = [...uploadedFiles, ...newFiles].slice(0, MAX_FILES);
      setFieldValue("priloha", updatedFiles);
      setUploadedFiles(updatedFiles);
    }
  };

  const handleFileRemove = (index, setFieldValue) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
    setFieldValue("priloha", updatedFiles);
    setFileLimitError(""); // Clear error message when a file is removed
  };

  return (
    <$.FormWrapper>
      <Formik
        initialValues={{
          jmeno: "",
          email: "",
          zprava: "",
          telefon: "",
          priloha: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <$.FormField>
              <label>Jméno</label>
              <Field type="text" name="jmeno" />
              <ErrorMessage name="jmeno" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>E-mail</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>Telefonní číslo</label>
              <Field type="text" name="telefon" />
            </$.FormField>

            <$.FormField>
              <label>Zpráva</label>
              <Field as="textarea" name="zprava" />
              <ErrorMessage name="zprava" component={$.ErrorText} />
            </$.FormField>

            <$.FormField>
              <label>Příloha</label>
              <$.FileDropArea
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, setFieldValue)}
                onClick={handleFileClick}
                isDragActive={isDragActive}
              >
                <$.UploadMessage>Sem přetáhněte soubory nebo</$.UploadMessage>
                <$.UploadButton type="button" onClick={handleFileClick}>
                  Vyberte soubory
                </$.UploadButton>
                <input
                  type="file"
                  name="priloha"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(event) => handleFileChange(event, setFieldValue)}
                  multiple
                  accept=".jpg, .jpeg, .png, .pdf"
                />
                <$.UploadMessage>
                  Povoleny jsou formáty .jpg, .jpeg, .png, .pdf v celkové
                  velikosti max. 15 MB
                </$.UploadMessage>
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

              <ErrorMessage name="priloha" component={$.ErrorText} />
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
