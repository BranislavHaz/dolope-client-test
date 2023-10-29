import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/layouts/configurator/Footer.styled";

const Footer = () => {
  const { currentStep, setCurrentStepId } = useMainStore((state) => ({
    currentStep: state.currentStep,
    setCurrentStepId: state.setCurrentStepId,
  }));

  const handleClickNext = () => {
    currentStep.isFilled && setCurrentStepId(currentStep.id + 1);
  };

  return (
    <$.Footer>
      <$.BackButton>zpět</$.BackButton>
      <$.NextButton $isActive={currentStep.isFilled} onClick={handleClickNext}>
        pokračovat
      </$.NextButton>
    </$.Footer>
  );
};

export default Footer;
