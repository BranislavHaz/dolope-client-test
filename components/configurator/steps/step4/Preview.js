import useMainStore from "@/stores/useMainStore";

import WardrobeView from "@/layouts/configurator/WardrobeView";
import PriceTab from "./PriceTab";

import * as $ from "@/styles/configurator/components/steps/step4/Preview.styled";

const Preview = ({ price, translations: t }) => {
  const { setCurrentStepId, setOrderStatus } = useMainStore((state) => ({
    setCurrentStepId: state.setCurrentStepId,
    setOrderStatus: state.setOrderStatus,
  }));

  const handleBack = () => {
    setCurrentStepId(3);
    setOrderStatus("initial");
  };

  return (
    <$.WrapPreview>
      <$.WardrobeWrap>
        <WardrobeView translations={t.preview.wardrobe_view} />
      </$.WardrobeWrap>
      <$.Wrap>
        <PriceTab price={price} type={"top"} translations={t.price_tab} />
        <$.BackButton onClick={handleBack}>
          {`<< ${t.preview.back_button}`}
        </$.BackButton>
      </$.Wrap>
    </$.WrapPreview>
  );
};

export default Preview;
