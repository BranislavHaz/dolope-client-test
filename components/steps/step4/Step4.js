import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/step4/Step4.styled";

import WardrobeView from "@/layouts/configurator/WardrobeView";

import { getAreasPrice } from "@/utils/steps/step4/areas/getAreasPrice";
import { getProfilesDoorPrice } from "@/utils/steps/step4/profiles/getProfilesDoorPrice";
import { getDrawerFittingsPrice } from "@/utils/steps/step4/drawers/getDrawerFittingsPrice";

const Step4 = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const areasPrice = getAreasPrice(state);
  const profilesPrice = getProfilesDoorPrice(state);
  const drawersFittingPrice = getDrawerFittingsPrice(state);
  const marginPrice = 1.8; // marža
  const feesDemos = 7400; // formatovanie, hranenie, balenie, dovoz
  const feesNabykov = 200; // dovoz

  const fullPrice = (
    (areasPrice +
      profilesPrice +
      drawersFittingPrice +
      feesDemos +
      feesNabykov) *
    marginPrice
  ).toFixed(0);
  const formattedPrice = Number(fullPrice).toLocaleString("cs-CZ");

  /*   console.log(areasPrice);
  console.log(profilesPrice);
  console.log(drawersFittingPrice); */

  return (
    <$.Wrap>
      <$.WardrobeWrap>
        <WardrobeView />
      </$.WardrobeWrap>
      <$.ContentWrap>
        <$.Title>Celková cena</$.Title>
        <$.Price>{formattedPrice} Kč</$.Price>
        <$.OrderButton>Nezávazně objednat</$.OrderButton>
        <$.TitlePricing>V ceně je zahrnuto:</$.TitlePricing>
        <$.ElementPricing>Telefonická a osobní konzultace</$.ElementPricing>
        <$.ElementPricing>Zaměření prostoru pro skříň</$.ElementPricing>
        <$.ElementPricing>Fotorealistická vizualizace</$.ElementPricing>
        <$.ElementPricing>Výroba skříně</$.ElementPricing>
        <$.ElementPricing>Doprava a montáž skříně</$.ElementPricing>
      </$.ContentWrap>
    </$.Wrap>
  );
};

export default Step4;
