import * as $ from "@/styles/layouts/configurator/WardrobeConfig.styled";

import Steps from "@/components/configurator/steps/Steps";

const WardrobeConfig = () => {
  return (
    <$.WardrobeConfig>
      <$.ContentWrapper>
        <Steps />
      </$.ContentWrapper>
    </$.WardrobeConfig>
  );
};

export default WardrobeConfig;
