import { useState } from "react";
import { useFormik } from "formik";
import { postOrder } from "@/utils/configurator/postOrder";
import * as Yup from "yup";
import PriceTab from "./PriceTab";
import * as $ from "@/styles/configurator/components/steps/step4/OrderForm.styled";
import useMainStore from "@/stores/useMainStore";

import ConfettiAnimation from "@/components/ConfettiAnimation";

import { getDataFromState } from "@/utils/configurator/getDataFromState";

const OrderForm = ({ price, translations: t }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const defaultErrorMessage = t.order.form.error_messages.default;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      zip: "",
      info: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(defaultErrorMessage),
      lastName: Yup.string().required(defaultErrorMessage),
      email: Yup.string()
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          t.order.form.error_messages.email
        )
        .required(defaultErrorMessage),
      phone: Yup.string().required(defaultErrorMessage),
      city: Yup.string().required(defaultErrorMessage),
      zip: Yup.string().required(defaultErrorMessage),
      info: Yup.string(),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      const orderData = {
        ...values,
        state: getDataFromState(state),
        price: Number(price.replace(/\s+/g, "")),
        currency: t.order.currency,
      };
      const statusOrder = await postOrder(orderData);

      if (state.order.status === "initial" && statusOrder) {
        state.setOrderStatus("success");
      } else if (state.order.status === "initial" && !statusOrder) {
        state.setOrderStatus("failed");
      } else if (state.order.status === "failed" && statusOrder) {
        state.setOrderStatus("success");
      } else {
        state.setOrderStatus("error");
      }
      setIsSubmitting(false);
    },
  });

  return (
    <$.Wrap>
      <$.PriceWrap>
        <PriceTab price={price} type={"bottom"} translations={t.price_tab} />
      </$.PriceWrap>
      <$.FormWrap id="order-form">
        {state.order.status === "initial" && !isSubmitting && (
          <form onSubmit={formik.handleSubmit}>
            <$.Row>
              <$.InputWrap
                $isError={formik.submitCount > 0 && formik.errors.firstName}
              >
                <label htmlFor="firstName">{t.order.form.first_name}</label>
                <input
                  type="text"
                  id="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.submitCount > 0 && formik.errors.firstName ? (
                  <$.InputMessage $isError={true}>
                    {formik.errors.firstName}
                  </$.InputMessage>
                ) : (
                  <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
                )}
              </$.InputWrap>
              <$.InputWrap
                $isError={formik.submitCount > 0 && formik.errors.lastName}
              >
                <label htmlFor="lastName">{t.order.form.last_name}</label>
                <input
                  type="text"
                  id="lastName"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.submitCount > 0 && formik.errors.lastName ? (
                  <$.InputMessage $isError={true}>
                    {formik.errors.lastName}
                  </$.InputMessage>
                ) : (
                  <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
                )}
              </$.InputWrap>
            </$.Row>
            <$.Row>
              <$.InputWrap
                $isError={formik.submitCount > 0 && formik.errors.email}
              >
                <label htmlFor="email">{t.order.form.email}</label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.submitCount > 0 && formik.errors.mail ? (
                  <$.InputMessage $isError={true}>
                    {formik.errors.email}
                  </$.InputMessage>
                ) : (
                  <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
                )}
              </$.InputWrap>
              <$.InputWrap
                $isError={formik.submitCount > 0 && formik.errors.phone}
              >
                <label htmlFor="phone">{t.order.form.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  {...formik.getFieldProps("phone")}
                />
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
                <label htmlFor="city">{t.order.form.city}</label>
                <input
                  type="text"
                  id="city"
                  {...formik.getFieldProps("city")}
                />
                {formik.submitCount > 0 && formik.errors.city ? (
                  <$.InputMessage $isError={true}>
                    {formik.errors.city}
                  </$.InputMessage>
                ) : (
                  <$.InputMessage>{defaultErrorMessage}</$.InputMessage>
                )}
              </$.InputWrap>
              <$.InputWrap
                $isError={formik.submitCount > 0 && formik.errors.zip}
              >
                <label htmlFor="zip">{t.order.form.city}</label>
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
              <label htmlFor="info">{t.order.form.message}</label>
              <textarea rows={4} id="info" {...formik.getFieldProps("info")} />
            </$.InputWrap>
            <$.SubmitButton type="submit">
              {t.order.form.submit_button}
            </$.SubmitButton>
          </form>
        )}
        {state.order.status === "success" && !isSubmitting && (
          <$.OrderStatus>
            <ConfettiAnimation />
            <$.OrderStatusRow>
              {t.order.status.success.title}{" "}
              <$.Emoji>{t.order.status.success.emoji}</$.Emoji>
            </$.OrderStatusRow>
            <$.OrderStatusRow>
              {t.order.status.success.subtitle}
            </$.OrderStatusRow>
            <$.ThanksRow>{t.order.status.success.thanks}</$.ThanksRow>
          </$.OrderStatus>
        )}
        {state.order.status === "failed" && !isSubmitting && (
          <form onSubmit={formik.handleSubmit}>
            <$.OrderStatus>
              {t.order.status.warn.title}{" "}
              <$.Emoji>{t.order.status.warn.emoji}</$.Emoji>
              <$.SubmitButton type="submit">
                {t.order.form.submit_button}
              </$.SubmitButton>
            </$.OrderStatus>
          </form>
        )}
        {state.order.status === "error" && !isSubmitting && (
          <$.OrderStatus>
            <$.OrderStatusRow>
              {t.order.status.error.title}{" "}
              <$.Emoji>{t.order.status.error.emoji}</$.Emoji>
            </$.OrderStatusRow>
            <$.OrderStatusRow>{t.order.status.error.subtitle}</$.OrderStatusRow>
            <$.SubmitButton>
              <a href={`tel:${t.order.phone}`}>{t.order.phone}</a>
            </$.SubmitButton>
          </$.OrderStatus>
        )}
        {isSubmitting && (
          <$.OrderStatus>
            <$.Loader />
          </$.OrderStatus>
        )}
      </$.FormWrap>
    </$.Wrap>
  );
};

export default OrderForm;
