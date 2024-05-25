import useMainStore from "@/stores/useMainStore";

import WardrobeView from "@/layouts/configurator/WardrobeView";

import { getAreasPrice } from "@/utils/steps/step4/areas/getAreasPrice";
import { getProfilesDoorPrice } from "@/utils/steps/step4/profiles/getProfilesDoorPrice";
import { getDrawerFittingsPrice } from "@/utils/steps/step4/drawers/getDrawerFittingsPrice";

import * as $ from "@/styles/components/steps/step4/Preview.styled";

const Preview = () => {
  const { state, setCurrentStepId } = useMainStore((state) => ({
    state: state,
    setCurrentStepId: state.setCurrentStepId,
  }));

  const areasPrice = getAreasPrice(state);
  const profilesPrice = getProfilesDoorPrice(state);
  const drawersFittingPrice = getDrawerFittingsPrice(state);
  const marginPrice = 1.6; // marža
  const feesDemos = 7400; // formatovanie, hranenie, balenie, dovoz CZK
  const feesNabykov = 200; // dovoz CZK

  const fullPrice =
    +(
      (areasPrice + profilesPrice + feesDemos + feesNabykov) *
      marginPrice
    ).toFixed(0) + drawersFittingPrice;
  const formattedPrice = Number(fullPrice).toLocaleString("cs-CZ");

  const handleBack = () => {
    setCurrentStepId(3);
  };

  return (
    <$.WrapPreview>
      <$.WardrobeWrap>
        <WardrobeView />
      </$.WardrobeWrap>
      <$.Wrap>
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
        <$.BackButton onClick={handleBack}>
          {`<<`} Zpět na konfiguraci
        </$.BackButton>
      </$.Wrap>
    </$.WrapPreview>
  );
};

export default Preview;
