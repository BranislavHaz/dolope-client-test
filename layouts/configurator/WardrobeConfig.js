import * as $ from "@/styles/layouts/configurator/WardrobeConfig.styled";

import Step1 from "@/components/configurator/steps/Step1";

const WardrobeConfig = () => {
  return (
    <$.WardrobeConfig>
      <$.ContentWrapper>
        <Step1 />
      </$.ContentWrapper>
    </$.WardrobeConfig>
  );
};

export default WardrobeConfig;
