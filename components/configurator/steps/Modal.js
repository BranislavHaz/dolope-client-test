import { useEffect, useRef, useState } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/steps/Modal.styled";

import Button from "./ui/Button";

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

const Modal = () => {
  const {
    viewport,
    modal,
    setIsModalActive,
    sections,
    doors,
    activeFilter,
    stepsInputs,
  } = useMainStore((state) => ({
    state: state,
    viewport: state.viewport,
    modal: state.modal,
    setIsModalActive: state.setIsModalActive,
    sections: state.sections,
    doors: state.doors,
    activeFilter: state.activeFilter,
    stepsInputs: state.stepsInputs,
  }));
  const modalRef = useRef(0);

  const [isSubmitVisible, setIsSubmitVisible] = useState(false);
  const [submitAction, setSubmitAction] = useState(
    () => () => setIsModalActive(false)
  );

  useEffect(() => {
    if (modalRef.current) {
      modal.beScrolled &&
        modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [modal.beScrolled]);

  useEffect(() => {
    modal.isActive && modalRef.current.scrollTo({ top: 0, behavior: "auto" });
  }, [modal.isActive]);

  const checkVisibleSubmit = () => {
    switch (modal.type) {
      case "sizeWardrobe":
        return true;
      case "typeWardrobe":
        return stepsInputs.step1.typeWardrobe ? true : false;
      case "countSections":
        return stepsInputs.step1.countSections && stepsInputs.step1.countDoors
          ? true
          : false;
      case "typeSections":
        return stepsInputs.step2.typeSections ? true : false;
      case "typeDoors":
        return stepsInputs.step2.typeDoors ? true : false;
      case "typeProfiles":
        return stepsInputs.step2.typeProfiles ? true : false;
      case "decorCorpus":
        return stepsInputs.step3.decorCorpus ? true : false;
      case "decorSideWalls":
        return stepsInputs.step3.decorSideWalls ? true : false;
      case "decorDoors":
        return stepsInputs.step3.decorDoors ? true : false;

      default:
        return false;
    }
  };

  useEffect(() => {
    const isVisible = checkVisibleSubmit();
    setIsSubmitVisible(false);
    modal.isActive && setIsSubmitVisible(isVisible);
  }, [stepsInputs, modal.isActive]);

  const handleClick = () => {
    setIsModalActive(false);
    setIsSubmitVisible(false);
    setSubmitAction(() => () => setIsModalActive(false));
  };

  const ModalContent = {
    sizeWardrobe: <SizeWardrobe setHandleSubmit={setSubmitAction} />,
    typeWardrobe: <TypeWardrobe setHandleSubmit={setSubmitAction} />,
    countSections: <CountSections setHandleSubmit={setSubmitAction} />,
    typeSections: <TypeSections setHandleSubmit={setSubmitAction} />,
    typeDoors: <TypeDoors setHandleSubmit={setSubmitAction} />,
    typeProfiles: <TypeProfiles setHandleSubmit={setSubmitAction} />,
    decorCorpus: <DecorCorpus setHandleSubmit={setSubmitAction} />,
    decorSideWalls: <DecorSideWalls setHandleSubmit={setSubmitAction} />,
    decorDoors: <DecorDoors setHandleSubmit={setSubmitAction} />,
  };

  return (
    <>
      {modal.isActive && (
        <$.FullModalWrap $width={viewport.width} $height={viewport.height}>
          <$.Overlay
            $width={viewport.width}
            $height={viewport.height}
            $isActive={modal.isActive}
          />
          <$.ModalWrap
            ref={modalRef}
            $width={viewport.width}
            $height={viewport.height}
          >
            <$.TopBar>
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
              <$.CloseModal onClick={handleClick} />
            </$.TopBar>
            {ModalContent[modal.type]}
            <$.ModalFooter>
              <Button type={"lightColor"} handleClick={handleClick}>
                Zavřít
              </Button>
              <Button
                type={"mainColor"}
                handleClick={submitAction}
                $isVisible={isSubmitVisible}
              >
                Uložit
              </Button>
            </$.ModalFooter>
          </$.ModalWrap>
        </$.FullModalWrap>
      )}
    </>
  );
};

export default Modal;
