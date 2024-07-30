import * as $ from "@/styles/configurator/layouts/WardrobeConfig.styled";

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
