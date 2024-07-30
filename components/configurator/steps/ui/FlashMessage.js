import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/steps/ui/FlashMessage.styled";

const FlashMessage = ({ type, children }) => {
  const { flashMessage, setFlashMessage } = useMainStore((state) => ({
    flashMessage: state.modal.flashMessage,
    setFlashMessage: state.setFlashMessage,
  }));

  const getTypeMessage = (type) => {
    if (type === "error") return $.ErrorMessage;
  };

  const FlashMessage = getTypeMessage(type);

  const handleClick = () => {
    setFlashMessage({ type, value: false });
  };

  const checkIsVisible = (type) => {
    if (type === "error") return flashMessage.error;
    return false;
  };

  const isVisible = checkIsVisible(type);

  return (
    <$.FlashMessageWrap $isVisible={isVisible} onClick={handleClick}>
      <FlashMessage>
        <$.Text>{children}</$.Text>
      </FlashMessage>
    </$.FlashMessageWrap>
  );
};

export default FlashMessage;
