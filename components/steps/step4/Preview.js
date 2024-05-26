import useMainStore from "@/stores/useMainStore";

import WardrobeView from "@/layouts/configurator/WardrobeView";
import PriceTab from "./PriceTab";

import * as $ from "@/styles/components/steps/step4/Preview.styled";

const Preview = ({ price }) => {
  const { setCurrentStepId } = useMainStore((state) => ({
    setCurrentStepId: state.setCurrentStepId,
  }));

  const handleBack = () => {
    setCurrentStepId(3);
  };

  return (
    <$.WrapPreview>
      <$.WardrobeWrap>
        <WardrobeView />
      </$.WardrobeWrap>
      <$.Wrap>
        <PriceTab price={price} type={"top"} />
        <$.BackButton onClick={handleBack}>
          {`<<`} Zpět na konfiguraci
        </$.BackButton>
      </$.Wrap>
    </$.WrapPreview>
  );
};

export default Preview;
