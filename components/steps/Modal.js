import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/Modal.styled";

import SizeWardrobe from "./SizeWardrobe";
import TypeWardrobe from "./TypeWardrobe";
import CountSections from "./CountSections";

const Modal = () => {
  const { viewport, modal, setIsModalActive } = useMainStore((state) => ({
    viewport: state.viewport,
    modal: state.modal,
    setIsModalActive: state.setIsModalActive,
  }));

  const ModalContent = {
    sizeWardrobe: <SizeWardrobe />,
    typeWardrobe: <TypeWardrobe />,
    countSections: <CountSections />,
  };

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
      {ModalContent[modal.type]}
    </$.ModalWrap>
  );
};

export default Modal;
