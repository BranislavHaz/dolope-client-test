import useMainStore from "@/stores/useMainStore";
import { chceckFilledSteps } from "@/utils/steps/checkFilledSteps";
import * as $ from "@/styles/layouts/configurator/Footer.styled";

const Footer = () => {
  const { state, currentStep, setCurrentStepId } = useMainStore((state) => ({
    state: state,
    currentStep: state.currentStep,
    setCurrentStepId: state.setCurrentStepId,
  }));

  const handleClickNext = () => {
    if (currentStep.id === 1) {
      Object.values(currentStep.isFilledFirstStep).every(
        (value) => value === true
      ) && setCurrentStepId(currentStep.id + 1);
    } else {
      currentStep.isFilled && setCurrentStepId(currentStep.id + 1);
    }
  };

  return (
    <$.Footer>
      <$.BackButton $isActive={currentStep.id !== 1}>zpět</$.BackButton>
      <$.NextButton
        $isActive={chceckFilledSteps(currentStep.id, state)}
        onClick={handleClickNext}
      >
        pokračovat
      </$.NextButton>
    </$.Footer>
  );
};

export default Footer;
