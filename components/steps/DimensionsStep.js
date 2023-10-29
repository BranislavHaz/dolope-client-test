import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import * as $ from "@/styles/components/steps/DimensionsStep";

const DimensionsSchema = Yup.object().shape({
  width: Yup.number()
    .min(100, "Minimální šířka je 100 cm!")
    .max(560, "Maximální šířka je 560 cm!")
    .required("Tento rozměr je vyžadován!"),
  height: Yup.number()
    .min(100, "Minimální výška je 100 cm!")
    .max(277, "Maximální výška je 277 cm!")
    .required("Tento rozměr je vyžadován!"),
  depth: Yup.number()
    .min(28, "Minimální hloubka je 28 cm!")
    .max(100, "Maximální hloubka je 100 cm!")
    .required("Tento rozměr je vyžadován!"),
});

const DimensionsStep = () => {
  const [fieldsChanged, setFieldsChanged] = useState(false);
  const {
    setCurrentStepIsFilled,
    setWardrobeWidth,
    setWardrobeHeight,
    setWardrobeDepth,
  } = useMainStore((state) => ({
    setCurrentStepIsFilled: state.setCurrentStepIsFilled,
    setWardrobeWidth: state.setWardrobeWidth,
    setWardrobeHeight: state.setWardrobeHeight,
    setWardrobeDepth: state.setWardrobeDepth,
  }));

  const handleInputChange = (e, handleChange) => {
    setFieldsChanged(true);
    handleChange(e);
  };

  return (
    <Formik
      initialValues={{
        width: "",
        height: "",
        depth: "",
      }}
      validationSchema={DimensionsSchema}
      validateOnMount
      onSubmit={() => {}}
    >
      {({ isValid, values, handleChange, errors, touched }) => {
        console.log(errors.width);
        useEffect(() => {
          if (fieldsChanged) {
            setCurrentStepIsFilled(isValid);
          }

          if (isValid) {
            setWardrobeWidth(values.width * 10);
            setWardrobeHeight(values.height * 10);
            setWardrobeDepth(values.depth * 10);
          }
        }, [fieldsChanged, isValid]);

        return (
          <$.FormWrapper>
            <Form>
              <$.InputWrapper $isValid={!(errors.width && touched.width)}>
                <Field
                  type="number"
                  id="width"
                  name="width"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  value={values.width}
                />
                <label htmlFor="width">Šířka</label>
                <ErrorMessage name="width" component="span" />
              </$.InputWrapper>
              <$.InputWrapper $isValid={!(errors.height && touched.height)}>
                <Field
                  type="number"
                  id="height"
                  name="height"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  value={values.height}
                />
                <label htmlFor="height">Výška</label>
                <ErrorMessage name="height" component="span" />
              </$.InputWrapper>
              <$.InputWrapper $isValid={!(errors.depth && touched.depth)}>
                <Field
                  type="number"
                  id="depth"
                  name="depth"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  value={values.depth}
                />
                <label htmlFor="depth">Hloubka</label>
                <ErrorMessage name="depth" component="span" />
              </$.InputWrapper>
            </Form>
          </$.FormWrapper>
        );
      }}
    </Formik>
  );
};

export default DimensionsStep;
