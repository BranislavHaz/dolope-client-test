import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import { calcSectionsWidth } from "@/utils/calcSectionsWidth";
import { calcDoorWidth } from "@/utils/calcDoorWidth";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import * as $ from "@/styles/components/steps/Form.styled";

const CountSchema = Yup.object().shape({
  sections: Yup.number()
    .min(1, "Vyberte si prosím ze seznamu")
    .required("Počet sekcí je vyžadováno"),
  doors: Yup.number()
    .min(1, "Vyberte si prosím ze seznamu")
    .required("Počet dveří je vyžadováno"),
});

const generateOptionsOfSections = (state) => {
  const minCountSections = Math.floor(
    state.wardrobe.width / state.sections.maxWidth
  );
  const maxCountSections = Math.floor(
    state.wardrobe.width / state.sections.minWidth
  );

  const sectionsArr = [];

  for (let i = minCountSections; i <= maxCountSections; i++) {
    const sectionsWidth = calcSectionsWidth(state, i);
    sectionsArr.push(
      <option key={i} value={i}>
        {`${i}. (${sectionsWidth / 10} cm)`}
      </option>
    );
  }

  return sectionsArr;
};

const generateOptionsOfDoors = (state, countOfSections) => {
  const m2WeightInKG = 13;
  const profilesWeight = 10;
  const maxLoadOfDoor = 50;
  const { wardrobe } = state;

  if (countOfSections % 2 === 1) {
    return false;
  } else {
    const m2SectionArea =
      ((wardrobe.width / countOfSections) * wardrobe.height) / 1000000;
    const doorsArr = [];

    if (m2SectionArea * m2WeightInKG * 2 + profilesWeight < maxLoadOfDoor) {
      doorsArr.push(
        <option key={1} value={countOfSections / 2}>
          {`${countOfSections / 2}. (${calcDoorWidth(
            state,
            countOfSections / 2
          )} cm)`}
        </option>
      );
    }

    doorsArr.push(
      <option key={2} value={countOfSections}>
        {`${countOfSections}. (${calcDoorWidth(state, countOfSections)} cm)`}
      </option>
    );

    return doorsArr;
  }
};

const CountSectionDoorStep = () => {
  const [fieldsChanged, setFieldsChanged] = useState(false);
  const { state, setCurrentStepIsFilled, setSectionsCount, setDoorsCount } =
    useMainStore((state) => ({
      state: state,
      setCurrentStepIsFilled: state.setCurrentStepIsFilled,
      setSectionsCount: state.setSectionsCount,
      setDoorsCount: state.setDoorsCount,
    }));

  const handleInputChange = (e, handleChange) => {
    setFieldsChanged(true);
    handleChange(e);
  };

  return (
    <Formik
      initialValues={{
        sections: "",
        doors: "",
      }}
      validationSchema={CountSchema}
      validateOnMount
      onSubmit={() => {}}
    >
      {({ isValid, values, handleChange, errors, touched }) => {
        useEffect(() => {
          if (fieldsChanged) {
            setCurrentStepIsFilled(isValid, "countSectionDoor");
          }

          if (isValid) {
            values.sections && setSectionsCount(+values.sections);
            values.doors && setDoorsCount(+values.doors);
          }
        }, [fieldsChanged, isValid, values]);

        return (
          <$.FormWrapper>
            <Form>
              <$.InputWrapper $isValid={!(errors.sections && touched.sections)}>
                <Field
                  as="select"
                  id="sections"
                  name="sections"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  value={values.sections}
                >
                  <option value={0}>- Vyberte si ze seznamu -</option>
                  {generateOptionsOfSections(state)}
                </Field>
                <label htmlFor="sections">Počet sekcí</label>
                <ErrorMessage name="sections" component="span" />
              </$.InputWrapper>
              <$.InputWrapper $isValid={!(errors.doors && touched.doors)}>
                <Field
                  as="select"
                  id="doors"
                  name="doors"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  value={values.doors}
                >
                  <option value={0}>- Vyberte si ze seznamu -</option>
                  {generateOptionsOfDoors(state, values.sections)}
                </Field>
                <label htmlFor="doors">Počet posuvných dveří</label>
                <ErrorMessage name="doors" component="span" />
              </$.InputWrapper>
            </Form>
          </$.FormWrapper>
        );
      }}
    </Formik>
  );
};

export default CountSectionDoorStep;
