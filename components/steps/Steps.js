import useMainStore from "@/stores/useMainStore";

import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";

const stepsMap = {
  1: <Step1 />,
  2: <Step2 />,
};

const Steps = () => {
  const { currentStep } = useMainStore((state) => ({
    currentStep: state.currentStep,
  }));

  return <>{stepsMap[currentStep.id]}</>;
};

export default Steps;
