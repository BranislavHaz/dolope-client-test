import * as $ from "@/styles/components/steps/ui/SubmitButton.styled";

const SubmitButton = ({ isVisible, submitAction }) => {
  return (
    <$.SubmitWrap $isVisible={isVisible}>
      <$.SubmitButton onClick={submitAction}>Uložit</$.SubmitButton>
    </$.SubmitWrap>
  );
};

export default SubmitButton;
