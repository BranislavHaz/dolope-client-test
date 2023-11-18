import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/Modal.styled";

import SizeWardrobe from "./SizeWardrobe";

const Modal = () => {
  const { viewport, modal, setIsModalActive } = useMainStore((state) => ({
    viewport: state.viewport,
    modal: state.modal,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleClick = () => {
    setIsModalActive(false);
  };

  return (
    <$.ModalWrap
      $width={viewport.width}
      $height={viewport.height}
      $isActive={modal.isActive}
    >
      <$.CloseModal onClick={handleClick}>
        Zavřít okno <$.CloseIcon>x</$.CloseIcon>
      </$.CloseModal>
      <SizeWardrobe />
    </$.ModalWrap>
  );
};

export default Modal;
