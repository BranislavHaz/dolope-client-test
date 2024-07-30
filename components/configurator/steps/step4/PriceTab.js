import * as $ from "@/styles/configurator/components/steps/step4/PriceTab.styled";

const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const PriceTab = ({ price, type }) => {
  return (
    <>
      <$.ContentWrap>
        <$.Title>Celková cena</$.Title>
        <$.Price>{price} Kč</$.Price>
        {type === "top" && (
          <$.OrderButton onClick={() => handleScroll("order-form")}>
            Nezávazně objednat ▼
          </$.OrderButton>
        )}
        <$.TitlePricing>V ceně je zahrnuto:</$.TitlePricing>
        <$.ElementPricing>Telefonická a osobní konzultace</$.ElementPricing>
        <$.ElementPricing>Zaměření prostoru pro skříň</$.ElementPricing>
        <$.ElementPricing>Fotorealistická vizualizace</$.ElementPricing>
        <$.ElementPricing>Výroba skříně</$.ElementPricing>
        <$.ElementPricing>Doprava a montáž skříně</$.ElementPricing>
      </$.ContentWrap>
    </>
  );
};

export default PriceTab;
