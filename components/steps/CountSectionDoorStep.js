import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import { calcSectionsWidth } from "@/utils/steps/step1/calcSectionsWidth";
import { calcDoorWidth } from "@/utils/steps/step1/calcDoorWidth";

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
  const doorsArr = [];

  if (countOfSections % 2 !== 1) {
    const m2SectionArea =
      ((wardrobe.width / countOfSections) * wardrobe.height) / 1000000;

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
  }

  doorsArr.push(
    <option key={2} value={countOfSections}>
      {`${countOfSections}. (${calcDoorWidth(state, countOfSections)} cm)`}
    </option>
  );

  return doorsArr;
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

  const handleInputChange = (e, handleChange, setFieldValue) => {
    setFieldsChanged(true);
    handleChange(e);
    if (e.target.name === "sections") {
      setFieldValue("doors", 0);
    }
  };

  return (
    <Formik
      initialValues={{
        sections: 0,
        doors: 0,
      }}
      validationSchema={CountSchema}
      validateOnMount
      onSubmit={() => {}}
    >
      {({ isValid, values, handleChange, errors, touched, setFieldValue }) => {
        useEffect(() => {
          if (fieldsChanged) {
            setCurrentStepIsFilled(isValid, "countSectionDoor");
          }

          if (isValid) {
            values.sections && setSectionsCount(Number(values.sections));
            values.doors && setDoorsCount(Number(values.doors));
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
                  onChange={(e) =>
                    handleInputChange(e, handleChange, setFieldValue)
                  }
                  value={Number(values.sections)}
                >
                  <option value={0}>- Vyberte si ze seznamu -</option>
                  {generateOptionsOfSections(state)}
                </Field>
                <label htmlFor="sections">Počet sekcí (šířka)</label>
                <ErrorMessage name="sections" component="span" />
              </$.InputWrapper>
              <$.InputWrapper $isValid={!(errors.doors && touched.doors)}>
                <Field
                  as="select"
                  id="doors"
                  name="doors"
                  onChange={(e) => handleInputChange(e, handleChange)}
                  value={Number(values.doors)}
                >
                  <option value={0}>- Vyberte si ze seznamu -</option>
                  {generateOptionsOfDoors(state, Number(values.sections))}
                </Field>
                <label htmlFor="doors">Počet dveří (šířka)</label>
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
