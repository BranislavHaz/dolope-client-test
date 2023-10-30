import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/Steps.styled";

import DimensionsStep from "./DimensionsStep";
import TypeStep from "./TypeStep";
import CountSectionDoorStep from "./CountSectionDoorStep";

const steps = {
  1: [
    { title: "Rozměry skříně", component: DimensionsStep },
    { title: "Typ skříně", component: TypeStep },
    { title: "Počet sekcí a dveří", component: CountSectionDoorStep },
  ],
  2: [{ title: "Typ skříně", component: TypeStep }],
};

const Steps = () => {
  const { currentStep } = useMainStore((state) => ({
    currentStep: state.currentStep,
  }));

  const currentSteps = steps[currentStep.id];

  return (
    <$.StepWrapper>
      {currentSteps.map((step, index) => (
        <div key={index}>
          <$.Title>{step.title}</$.Title>
          <step.component />
        </div>
      ))}
    </$.StepWrapper>
  );
};

export default Steps;
