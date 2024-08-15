import * as $ from "@/styles/configurator/layouts/WardrobeConfig.styled";

import Steps from "@/components/configurator/steps/Steps";

const WardrobeConfig = ({ translations: t }) => {
  return (
    <$.WardrobeConfig>
      <$.ContentWrapper>
        <Steps translations={t.steps} />
      </$.ContentWrapper>
    </$.WardrobeConfig>
  );
};

export default WardrobeConfig;
