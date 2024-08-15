import * as $ from "@/styles/configurator/components/steps/step4/PriceTab.styled";

const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const PriceTab = ({ price, type, translations: t }) => {
  return (
    <>
      <$.ContentWrap>
        <$.Title>{t.title}</$.Title>
        <$.Price>{`${price} ${t.currency}`}</$.Price>
        {type === "top" && (
          <$.OrderButton onClick={() => handleScroll("order-form")}>
            {t.order_button}
          </$.OrderButton>
        )}
        <$.TitlePricing>{t.title_pricing}</$.TitlePricing>
        <$.ElementPricing>{t.including_price[0]}</$.ElementPricing>
        <$.ElementPricing>{t.including_price[1]}</$.ElementPricing>
        <$.ElementPricing>{t.including_price[2]}</$.ElementPricing>
        <$.ElementPricing>{t.including_price[3]}</$.ElementPricing>
        <$.ElementPricing>{t.including_price[4]}</$.ElementPricing>
      </$.ContentWrap>
    </>
  );
};

export default PriceTab;
