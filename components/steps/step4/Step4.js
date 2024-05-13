import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/step4/Step4.styled";

import WardrobeView from "@/layouts/configurator/WardrobeView";

import { getAreasPrice } from "@/utils/steps/step4/areas/getAreasPrice";
import { getProfilesDoorPrice } from "@/utils/steps/step4/profiles/getProfilesDoorPrice";

const Step4 = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const areasPrice = getAreasPrice(state);
  const profilesPrice = getProfilesDoorPrice(state);
  const fullPrice = areasPrice + profilesPrice;

  console.log(areasPrice);
  console.log(profilesPrice);

  return (
    <$.Wrap>
      <$.WardrobeWrap>
        <WardrobeView />
      </$.WardrobeWrap>
      <$.ContentWrap>
        <$.Title>Celková cena</$.Title>
        <$.Price>{fullPrice} Kč</$.Price>
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
