import useMainStore from "@/stores/useMainStore";
import { chceckFilledSteps } from "@/utils/steps/checkFilledSteps";

import Button from "@/components/steps/ui/Button";

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
    state.setIsModalActive(false);
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

  const isNextButtonActive = chceckFilledSteps(currentStep.id, state);

  return (
    <$.Footer>
      <Button type={"lightColor"} handleClick={handleClickBack}>
        zpět
      </Button>
      {isNextButtonActive && (
        <Button type={"mainColor"} handleClick={handleClickNext}>
          pokračovat
        </Button>
      )}
    </$.Footer>
  );
};

export default Footer;
