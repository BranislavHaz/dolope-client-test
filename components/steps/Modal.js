import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/Modal.styled";

// Step 1
import SizeWardrobe from "./step1/SizeWardrobe";
import TypeWardrobe from "./step1/TypeWardrobe";
import CountSections from "./step1/CountSections";

// Step2
import TypeDoors from "./step2/TypeDoors";

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
    typeDoors: <TypeDoors />,
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
