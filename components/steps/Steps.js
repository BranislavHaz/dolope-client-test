import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/Steps.styled";

import DimensionsStep from "./DimensionsStep";
import TypeStep from "./TypeStep";

const steps = {
  1: {
    title: "Rozměry skříně",
    component: DimensionsStep,
  },
  2: {
    title: "Typ skříně",
    component: TypeStep,
  },
};

const Steps = () => {
  const { currentStep } = useMainStore((state) => ({
    currentStep: state.currentStep,
  }));

  const CurrentStepComponent = steps[currentStep.id].component;

  return (
    <$.StepWrapper>
      <$.Title>{steps[currentStep.id].title}</$.Title>
      <CurrentStepComponent />
    </$.StepWrapper>
  );
};

export default Steps;
