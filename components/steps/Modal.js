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
import DecorSideWalls from "./step3/DecorSideWalls";
import DecorDoors from "./step3/DecorDoors";

// UI/UX
import FilterBoxCount from "./ui/FilterBoxCount";
import FilterBoxDecors from "./ui/FilterBoxDecors";

const Modal = () => {
  const { viewport, modal, setIsModalActive, sections, doors, activeFilter } =
    useMainStore((state) => ({
      viewport: state.viewport,
      modal: state.modal,
      setIsModalActive: state.setIsModalActive,
      sections: state.sections,
      doors: state.doors,
      activeFilter: state.activeFilter,
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
    decorSideWalls: <DecorSideWalls />,
    decorDoors: <DecorDoors />,
  };

  const handleClick = () => {
    setIsModalActive(false);
  };

  return (
    <$.Overlay
      $width={viewport.width}
      $height={viewport.height}
      $isActive={modal.isActive}
    >
      <$.ModalWrap
        ref={modalRef}
        $width={viewport.width}
        $height={viewport.height}
        $isActive={modal.isActive}
      >
        <$.TopBar>
          <$.CloseModal>
            <$.CloseIcon onClick={handleClick} />
          </$.CloseModal>
          {modal.type === "typeSections" && (
            <FilterBoxCount
              type={"sections"}
              count={sections.count}
              active={activeFilter.sections}
            />
          )}
          {modal.type === "typeDoors" && (
            <FilterBoxCount
              type={"doors"}
              count={doors.count}
              active={activeFilter.doors}
            />
          )}
          {modal.type === "decorCorpus" && <FilterBoxDecors type={"corpus"} />}
          {modal.type === "decorSideWalls" && (
            <FilterBoxDecors type={"sideWalls"} />
          )}
          {modal.type === "decorDoors" && <FilterBoxDecors type={"doors"} />}
        </$.TopBar>
        {ModalContent[modal.type]}
      </$.ModalWrap>
    </$.Overlay>
  );
};

export default Modal;
