import LightBox from "../ui/LightBox";
import Preview from "./Preview";
import PriceList from "./PriceList";
import StepsBeforeOrder from "./StepsBeforeOrder";
import OrderForm from "./OrderForm";

import useMainStore from "@/stores/useMainStore";

import { getAreasPrice } from "@/utils/configurator/steps/step4/areas/getAreasPrice";
import { getProfilesDoorPrice } from "@/utils/configurator/steps/step4/profiles/getProfilesDoorPrice";
import { getDrawerFittingsPrice } from "@/utils/configurator/steps/step4/drawers/getDrawerFittingsPrice";

import * as $ from "@/styles/components/steps/step4/Step4.styled";

const Step4 = () => {
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

  return (
    <$.Wrap>
      <LightBox />
      <Preview price={formattedPrice} />
      <$.WrapContent>
        <$.WrapSection>
          <$.Title>Specifikace skříně</$.Title>
          <$.Subtitle>Na základě zadaných hodnot</$.Subtitle>
          <PriceList />
        </$.WrapSection>
        <$.WrapSection>
          <$.Title>Co se uděje po odeslání objednávky?</$.Title>
          <$.Subtitle>
            Proces objednávky až po realizaci ve 3. krocích
          </$.Subtitle>
          <StepsBeforeOrder />
        </$.WrapSection>
        <$.WrapSection>
          <$.Title>Nezávazná objednávka</$.Title>
          <OrderForm price={formattedPrice} />
        </$.WrapSection>
      </$.WrapContent>
    </$.Wrap>
  );
};

export default Step4;
