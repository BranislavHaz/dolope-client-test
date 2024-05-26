import { useFormik } from "formik";
import { postOrder } from "@/utils/postOrder";
import * as Yup from "yup";
import PriceTab from "./PriceTab";
import * as $ from "@/styles/components/steps/step4/OrderForm.styled";
import useMainStore from "@/stores/useMainStore";

import { getDataFromState } from "@/utils/getDataFromState";

const OrderForm = ({ price }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));
  const defaultErrorMessage = "* vyžadováno";
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      mail: "",
      phone: "",
      city: "",
      zip: "",
      info: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(defaultErrorMessage),
      surname: Yup.string().required(defaultErrorMessage),
      mail: Yup.string()
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Nesprávný formát e-mailové adresy."
        )
        .required(defaultErrorMessage),
      phone: Yup.string().required(defaultErrorMessage),
      city: Yup.string().required(defaultErrorMessage),
      zip: Yup.string().required(defaultErrorMessage),
      info: Yup.string(),
    }),
    onSubmit: (values) => {
      // Submit logic
      //console.log("Form values:", values);

      const orderData = { ...values, state: getDataFromState(state) };
      postOrder(orderData);
    },
  });

  return (
    <$.Wrap>
      <$.PriceWrap>
        <PriceTab price={price} type={"bottom"} />
      </$.PriceWrap>
      <$.FormWrap>
        <form onSubmit={formik.handleSubmit}>
          <$.Row>
            <$.InputWrap
              $isError={formik.submitCount > 0 && formik.errors.name}
            >
              <label htmlFor="name">Jméno:</label>
              <input type="text" id="name" {...formik.getFieldProps("name")} />
              {formik.submitCount > 0 && formik.errors.name ? (
                <$.InputMessage $isError={true}>
                  {formik.errors.name}
                </$.InputMessage>
              ) : (
                <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
              )}
            </$.InputWrap>
            <$.InputWrap
              $isError={formik.submitCount > 0 && formik.errors.surname}
            >
              <label htmlFor="surname">Příjmení:</label>
              <input
                type="text"
                id="surname"
                {...formik.getFieldProps("surname")}
              />
              {formik.submitCount > 0 && formik.errors.surname ? (
                <$.InputMessage $isError={true}>
                  {formik.errors.surname}
                </$.InputMessage>
              ) : (
                <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
              )}
            </$.InputWrap>
          </$.Row>
          <$.Row>
            <$.InputWrap
              $isError={formik.submitCount > 0 && formik.errors.mail}
            >
              <label htmlFor="mail">E-mail:</label>
              <input type="email" id="mail" {...formik.getFieldProps("mail")} />
              {formik.submitCount > 0 && formik.errors.mail ? (
                <$.InputMessage $isError={true}>
                  {formik.errors.mail}
                </$.InputMessage>
              ) : (
                <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
              )}
            </$.InputWrap>
            <$.InputWrap
              $isError={formik.submitCount > 0 && formik.errors.phone}
            >
              <label htmlFor="phone">Tel. číslo:</label>
              <input type="tel" id="phone" {...formik.getFieldProps("phone")} />
              {formik.submitCount > 0 && formik.errors.phone ? (
                <$.InputMessage $isError={true}>
                  {formik.errors.phone}
                </$.InputMessage>
              ) : (
                <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
              )}
            </$.InputWrap>
          </$.Row>
          <$.Row>
            <$.InputWrap
              $isError={formik.submitCount > 0 && formik.errors.city}
            >
              <label htmlFor="city">Město / obec:</label>
              <input type="text" id="city" {...formik.getFieldProps("city")} />
              {formik.submitCount > 0 && formik.errors.city ? (
                <$.InputMessage $isError={true}>
                  {formik.errors.city}
                </$.InputMessage>
              ) : (
                <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
              )}
            </$.InputWrap>
            <$.InputWrap $isError={formik.submitCount > 0 && formik.errors.zip}>
              <label htmlFor="zip">PSČ:</label>
              <input type="text" id="zip" {...formik.getFieldProps("zip")} />
              {formik.submitCount > 0 && formik.errors.zip ? (
                <$.InputMessage $isError={true}>
                  {formik.errors.zip}
                </$.InputMessage>
              ) : (
                <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
              )}
            </$.InputWrap>
          </$.Row>
          <$.InputWrap>
            <label htmlFor="info">Doplňkové informace:</label>
            <textarea rows={4} id="info" {...formik.getFieldProps("info")} />
          </$.InputWrap>
          <$.SubmitButton type="submit">Odeslat objednávku</$.SubmitButton>
        </form>
      </$.FormWrap>
    </$.Wrap>
  );
};

export default OrderForm;
