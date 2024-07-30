import useMainStore from "@/stores/useMainStore";
import { chceckFilledSteps } from "@/utils/configurator/steps/checkFilledSteps";

import Button from "@/components/configurator/steps/ui/Button";

import * as $ from "@/styles/configurator/layouts/Footer.styled";

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
    } else if (currentStep.id === 3) {
      Object.values(stepsInputs.step3).every((value) => value === true) &&
        setCurrentStepId(currentStep.id + 1);
    } else {
      currentStep.isFilled && setCurrentStepId(currentStep.id + 1);
    }
  };

  const handleClickBack = () => {
    if (currentStep.id > 1) {
      setCurrentStepId(currentStep.id - 1);
      state.setIsModalActive(false);
    }
  };

  const isNextButtonActive = chceckFilledSteps(currentStep.id, state);

  return (
    <$.Footer $isFirstStep={currentStep.id === 1}>
      <Button
        type={"lightColor"}
        handleClick={handleClickBack}
        isVisible={currentStep.id !== 1}
      >
        Zpět
      </Button>
      {isNextButtonActive && (
        <Button type={"mainColor"} handleClick={handleClickNext}>
          {currentStep.id !== 3 ? "Pokračovat" : "Zobrazit cenu"}
        </Button>
      )}
    </$.Footer>
  );
};

export default Footer;
