import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import * as $ from "@/styles/components/steps/Form.styled";

const DimensionsSchema = Yup.object().shape({
  width: Yup.number()
    .min(100, "Minimální šířka je 100 cm")
    .max(560, "Maximální šířka je 560 cm")
    .required("Tento rozměr je vyžadován"),
  height: Yup.number()
    .min(100, "Minimální výška je 100 cm")
    .max(277, "Maximální výška je 277 cm")
    .required("Tento rozměr je vyžadován"),
  depth: Yup.number()
    .min(28, "Minimální hloubka je 28 cm")
    .max(100, "Maximální hloubka je 100 cm")
    .required("Tento rozměr je vyžadován"),
  topShelfHeight: Yup.number()
    .min(15, "Minimální výška police je 15 cm")
    .max(40, "Maximální výška police je 40 cm")
    .required("Tento rozměr je vyžadován"),
});

const DimensionsStep = () => {
  const [fieldsChanged, setFieldsChanged] = useState(false);
  const {
    setCurrentStepIsFilled,
    setWardrobeWidth,
    setWardrobeHeight,
    setWardrobeDepth,
    setTopShelfHeight,
  } = useMainStore((state) => ({
    setCurrentStepIsFilled: state.setCurrentStepIsFilled,
    setWardrobeWidth: state.setWardrobeWidth,
    setWardrobeHeight: state.setWardrobeHeight,
    setWardrobeDepth: state.setWardrobeDepth,
    setTopShelfHeight: state.setTopShelfHeight,
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
        topShelfHeight: "",
      }}
      validationSchema={DimensionsSchema}
      validateOnMount
      onSubmit={() => {}}
    >
      {({ isValid, values, handleChange, errors, touched }) => {
        useEffect(() => {
          if (fieldsChanged) {
            setCurrentStepIsFilled(isValid, "dimensions");
          }

          if (isValid) {
            setWardrobeWidth(values.width * 10);
            setWardrobeHeight(values.height * 10);
            setWardrobeDepth(values.depth * 10);
            setTopShelfHeight(values.topShelfHeight * 10);
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
                <label htmlFor="width">Šířka skříně</label>
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
                <label htmlFor="height">Výška skříně</label>
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
                <label htmlFor="depth">Hloubka skříně</label>
                <ErrorMessage name="depth" component="span" />
              </$.InputWrapper>
              <$.InputWrapper
                $isValid={!(errors.topShelfHeight && touched.topShelfHeight)}
              >
                <Field
                  type="number"
                  id="topShelfHeight"
                  name="topShelfHeight"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  value={values.topShelfHeight}
                />
                <label htmlFor="topShelfHeight">Výška vrchní police</label>
                <ErrorMessage name="topShelfHeight" component="span" />
              </$.InputWrapper>
            </Form>
          </$.FormWrapper>
        );
      }}
    </Formik>
  );
};

export default DimensionsStep;
