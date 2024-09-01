import LightBox from "@/components/LightBox";
import Preview from "./Preview";
import PriceList from "./PriceList";
import StepsBeforeOrder from "./StepsBeforeOrder";
import OrderForm from "./OrderForm";

import useMainStore from "@/stores/useMainStore";

import { getCurrencyPriceColumn } from "@/utils/configurator/getCurrencyPriceColumn";
import { getAreasPrice } from "@/utils/configurator/steps/step4/areas/getAreasPrice";
import { getProfilesDoorPrice } from "@/utils/configurator/steps/step4/profiles/getProfilesDoorPrice";
import { getDrawerFittingsPrice } from "@/utils/configurator/steps/step4/drawers/getDrawerFittingsPrice";

import * as $ from "@/styles/configurator/components/steps/step4/Step4.styled";

const Step4 = ({ translations: t }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const currencyPriceColumn = getCurrencyPriceColumn();
  const areasPrice = getAreasPrice(state, currencyPriceColumn);
  const profilesPrice = getProfilesDoorPrice(state, currencyPriceColumn);
  const drawersFittingPrice = getDrawerFittingsPrice(
    state,
    currencyPriceColumn
  );
  const marginPrice = 1.6; // marža
  const feesDemos = 7400; // formatovanie, hranenie, balenie, dovoz CZK
  const feesNabykov = 200; // dovoz CZK

  const fullPrice =
    +(
      (areasPrice + profilesPrice + feesDemos + feesNabykov) *
      marginPrice
    ).toFixed(0) + drawersFittingPrice;
  const formattedPrice = Number(fullPrice).toLocaleString(t.locale_string);

  return (
    <$.Wrap>
      <LightBox translations={t.light_box} />
      <Preview price={formattedPrice} translations={t} />
      <$.WrapContent>
        <$.WrapSection>
          <$.Title>{t.wardrobe_specification.title}</$.Title>
          <$.Subtitle>{t.wardrobe_specification.subtitle}</$.Subtitle>
          <PriceList translations={t.wardrobe_specification.price_list} />
        </$.WrapSection>
        <$.WrapSection>
          <$.Title>{t.before_order.title}</$.Title>
          <$.Subtitle>{t.before_order.subtitle}</$.Subtitle>
          <StepsBeforeOrder translations={t.before_order} />
        </$.WrapSection>
        <$.WrapSection>
          <$.Title>{t.order.title}</$.Title>
          <OrderForm price={formattedPrice} translations={t} />
        </$.WrapSection>
      </$.WrapContent>
    </$.Wrap>
  );
};

export default Step4;
