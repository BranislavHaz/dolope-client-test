import useMainStore from "@/stores/useMainStore";
import { chceckFilledSteps } from "@/utils/steps/checkFilledSteps";
import * as $ from "@/styles/layouts/configurator/Footer.styled";

const Footer = () => {
  const { state, currentStep, stepsInputs, setCurrentStepId } = useMainStore(
    (state) => ({
      state: state,
      currentStep: state.currentStep,
      stepsInputs: state.stepsInputs,
      setCurrentStepId: state.setCurrentStepId,
    })
  );

  const handleClickNext = () => {
    if (currentStep.id === 1) {
      Object.values(stepsInputs.step1).every((value) => value === true) &&
        setCurrentStepId(currentStep.id + 1);
    } else if (currentStep.id === 2) {
      Object.values(stepsInputs.step2).every((value) => value === true) &&
        setCurrentStepId(currentStep.id + 1);
    } else {
      currentStep.isFilled && setCurrentStepId(currentStep.id + 1);
    }
  };

  const handleClickBack = () => {
    if (currentStep.id > 1) {
      setCurrentStepId(currentStep.id - 1);
    }
  };

  return (
    <$.Footer>
      <$.BackButton $isActive={currentStep.id !== 1} onClick={handleClickBack}>
        zpět
      </$.BackButton>
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
