import LightBox from "../ui/LightBox";
import Preview from "./Preview";
import PriceList from "./PriceList";

import * as $ from "@/styles/components/steps/step4/Step4.styled";

const Step4 = () => {
  return (
    <$.Wrap>
      <LightBox />
      <Preview />
      <PriceList />
    </$.Wrap>
  );
};

export default Step4;
