import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/layouts/configurator/Footer.styled";

const Footer = () => {
  const { currentStep, setCurrentStepId } = useMainStore((state) => ({
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

  const chceckIfIsActive = () => {
    if (currentStep.id === 1) {
      return Object.values(currentStep.isFilledFirstStep).every(
        (value) => value === true
      );
    } else {
      return currentStep.isFilled;
    }
  };

  return (
    <$.Footer>
      <$.BackButton>zpět</$.BackButton>
      <$.NextButton $isActive={chceckIfIsActive()} onClick={handleClickNext}>
        pokračovat
      </$.NextButton>
    </$.Footer>
  );
};

export default Footer;
