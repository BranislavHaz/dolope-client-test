import { useEffect, useRef } from "react";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/Modal.styled";

// Step 1
import SizeWardrobe from "./step1/SizeWardrobe";
import TypeWardrobe from "./step1/TypeWardrobe";
import CountSections from "./step1/CountSections";

// Step2
import TypeSections from "./step2/TypeSections";
import TypeDoors from "./step2/TypeDoors";
import TypeProfiles from "./step2/TypeProfiles";

// Step 3
import DecorCorpus from "./step3/DecorCorpus";

const Modal = () => {
  const { viewport, modal, setIsModalActive } = useMainStore((state) => ({
    viewport: state.viewport,
    modal: state.modal,
    setIsModalActive: state.setIsModalActive,
  }));
  const modalRef = useRef(0);

  useEffect(() => {
    if (modalRef.current) {
      modal.beScrolled &&
        modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [modal.beScrolled]);

  const ModalContent = {
    sizeWardrobe: <SizeWardrobe />,
    typeWardrobe: <TypeWardrobe />,
    countSections: <CountSections />,
    typeSections: <TypeSections />,
    typeDoors: <TypeDoors />,
    typeProfiles: <TypeProfiles />,
    decorCorpus: <DecorCorpus />,
  };

  const handleClick = () => {
    setIsModalActive(false);
  };

  return (
    <$.ModalWrap
      ref={modalRef}
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
