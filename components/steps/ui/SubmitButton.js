import Image from "next/image";
import * as $ from "@/styles/components/steps/ui/SubmitButton.styled";

const SubmitButton = ({ isVisible, submitAction }) => {
  return (
    <$.SubmitWrap $isVisible={isVisible}>
      <$.SubmitButton onClick={submitAction}>
        <$.SubmitIcon>
          <Image
            src={"./icons/save.svg"}
            width={100}
            height={100}
            alt="Potvrdit nastavení"
          />
        </$.SubmitIcon>
        <$.SubmitText>Uložit</$.SubmitText>
      </$.SubmitButton>
    </$.SubmitWrap>
  );
};

export default SubmitButton;
