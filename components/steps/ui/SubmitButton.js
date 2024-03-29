import * as $ from "@/styles/components/steps/ui/SubmitButton.styled";

const SubmitButton = ({ isVisible, submitAction, withBg = true }) => {
  return (
    <$.SubmitWrap $withBg={withBg} $isVisible={isVisible}>
      <$.SubmitButton onClick={submitAction}>Uložit</$.SubmitButton>
    </$.SubmitWrap>
  );
};

export default SubmitButton;
