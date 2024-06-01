import { useEffect, useState } from "react";
import { checkIfIsActiveSection } from "@/utils/steps/step2/checkIfIsActiveSection";
import { isAllowedSection } from "@/utils/steps/step2/isAllowedSection";
import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";

import SelfModule from "@/components/modules/modal/SelfModule";
import DrawerModule from "@/components/modules/modal/DrawerModule";
import VariableDrawerModule from "./sectionsElements/VariableDrawerModule";
import HangerModule from "@/components/modules/modal/HangerModule";
import VariableHangerModule from "./sectionsElements/VariableHangerModule";

import toast from "react-hot-toast";

import * as $ from "@/styles/components/steps/step2/TypeSections.styled";

const TypeSections = ({ setHandleSubmit }) => {
  const { state, sections, setStepsInputs } = useMainStore((state) => ({
    state: state,
    sections: state.sections,
    setStepsInputs: state.setStepsInputs,
  }));
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const countOfSelectedSections = Object.keys(sections.typeOfSections).length;

    if (countOfSelectedSections === sections.count) {
      setStepsInputs("step2", "typeSections", true);
      if (!isInitialRender) {
        toast.success("Typy sekcí byly uloženy!", {
          className: "larger-device",
        });
      }
    } else {
      setStepsInputs("step2", "typeSections", false);
    }
    setIsInitialRender(false);
  }, [sections.typeOfSections]);

  const handleSubmit = () => {
    if (Object.keys(sections.typeOfSections).length === sections.count) {
      state.setIsModalActive(false);
      state.setActiveFilter("sections", 1);
      toast.success("Typy sekcí byly uloženy!", {
        className: "small-device",
      });
    } else {
      toast.error("Vyberte typ pro všechny sekce!", {
        className: "small-device",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [sections.typeOfSections]);

  const checkIsAllowedSection = (typeSection) => {
    const corpusHeight = state.corpus.height;
    return isAllowedSection({ corpusHeight, typeSection });
  };

  return (
    <>
      <$.Wrap>
        <Title>Police</Title>
        <$.TypeSectionsWrap $sectionWidth={state.viewportSizes.modal.elWidth}>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 26)}
            $isAllowed={checkIsAllowedSection(26)}
          >
            <SelfModule countSelfs={3} id={26} isBottomSelf={true} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 1)}
            $isAllowed={checkIsAllowedSection(1)}
          >
            <SelfModule countSelfs={3} id={1} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 2)}
            $isAllowed={checkIsAllowedSection(2)}
          >
            <SelfModule countSelfs={4} id={2} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 3)}
            $isAllowed={checkIsAllowedSection(3)}
          >
            <SelfModule countSelfs={5} id={3} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 4)}
            $isAllowed={checkIsAllowedSection(4)}
          >
            <SelfModule countSelfs={6} id={4} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 5)}
            $isAllowed={checkIsAllowedSection(5)}
          >
            <SelfModule countSelfs={7} id={5} />
          </$.SectionType>
        </$.TypeSectionsWrap>
        <Title>Zásuvky</Title>
        <$.TypeSectionsWrap $sectionWidth={state.viewportSizes.modal.elWidth}>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 27)}
            $isAllowed={checkIsAllowedSection(27)}
          >
            <DrawerModule
              countDrawers={1}
              countShelfs={4}
              countSpaces={2}
              bottomSpace={false}
              id={27}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 36)}
            $isAllowed={checkIsAllowedSection(36)}
          >
            <DrawerModule
              countDrawers={1}
              countShelfs={5}
              countSpaces={3}
              bottomSpace={false}
              id={36}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 28)}
            $isAllowed={checkIsAllowedSection(28)}
          >
            <DrawerModule
              countDrawers={2}
              countShelfs={4}
              countSpaces={2}
              bottomSpace={false}
              id={28}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 6)}
            $isAllowed={checkIsAllowedSection(6)}
          >
            <DrawerModule
              countDrawers={2}
              countShelfs={7}
              countSpaces={5}
              bottomSpace={false}
              id={6}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 29)}
            $isAllowed={checkIsAllowedSection(29)}
          >
            <DrawerModule
              countDrawers={3}
              countShelfs={4}
              countSpaces={2}
              bottomSpace={false}
              id={29}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 7)}
            $isAllowed={checkIsAllowedSection(7)}
          >
            <DrawerModule
              countDrawers={3}
              countShelfs={6}
              countSpaces={4}
              bottomSpace={false}
              id={7}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 8)}
            $isAllowed={checkIsAllowedSection(8)}
          >
            <DrawerModule
              countDrawers={3}
              countShelfs={7}
              countSpaces={5}
              bottomSpace={false}
              id={8}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 9)}
            $isAllowed={checkIsAllowedSection(9)}
          >
            <DrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomSpace={false}
              id={9}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 10)}
            $isAllowed={checkIsAllowedSection(10)}
          >
            <DrawerModule
              countDrawers={4}
              countShelfs={6}
              countSpaces={4}
              bottomSpace={false}
              id={10}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 30)}
            $isAllowed={checkIsAllowedSection(30)}
          >
            <VariableDrawerModule
              countDrawers={1}
              countShelfs={4}
              countSpaces={2}
              bottomSpace={true}
              id={30}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 37)}
            $isAllowed={checkIsAllowedSection(37)}
          >
            <VariableDrawerModule
              countDrawers={1}
              countShelfs={5}
              countSpaces={3}
              bottomSpace={true}
              id={37}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 11)}
            $isAllowed={checkIsAllowedSection(11)}
          >
            <VariableDrawerModule
              countDrawers={2}
              countShelfs={5}
              countSpaces={3}
              bottomSpace={true}
              id={11}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 12)}
            $isAllowed={checkIsAllowedSection(12)}
          >
            <VariableDrawerModule
              countDrawers={2}
              countShelfs={6}
              countSpaces={4}
              bottomSpace={true}
              id={12}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 13)}
            $isAllowed={checkIsAllowedSection(13)}
          >
            <VariableDrawerModule
              countDrawers={3}
              countShelfs={4}
              countSpaces={2}
              bottomSpace={true}
              id={13}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 14)}
            $isAllowed={checkIsAllowedSection(14)}
          >
            <VariableDrawerModule
              countDrawers={3}
              countShelfs={5}
              countSpaces={3}
              bottomSpace={true}
              id={14}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 15)}
            $isAllowed={checkIsAllowedSection(15)}
          >
            <VariableDrawerModule
              countDrawers={4}
              countShelfs={4}
              countSpaces={2}
              bottomSpace={true}
              id={15}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 16)}
            $isAllowed={checkIsAllowedSection(16)}
          >
            <VariableDrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomSpace={true}
              id={16}
            />
          </$.SectionType>
        </$.TypeSectionsWrap>
        <Title>Závěsná tyč</Title>
        <$.TypeSectionsWrap $sectionWidth={state.viewportSizes.modal.elWidth}>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 31)}
            $isAllowed={checkIsAllowedSection(31)}
          >
            <VariableHangerModule
              countShelfs={3}
              countSpaces={1}
              countDrawers={0}
              positionSelf={"top"}
              bottomSpace={false}
              bottomShelf={true}
              id={31}
            />
          </$.SectionType>

          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 17)}
            $isAllowed={checkIsAllowedSection(17)}
          >
            <VariableHangerModule
              countShelfs={3}
              countSpaces={1}
              countDrawers={0}
              positionSelf={"top"}
              bottomSpace={true}
              id={17}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 18)}
            $isAllowed={checkIsAllowedSection(18)}
          >
            <VariableHangerModule
              countShelfs={4}
              countSpaces={2}
              countDrawers={0}
              positionSelf={"top"}
              bottomSpace={true}
              id={18}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 19)}
            $isAllowed={checkIsAllowedSection(19)}
          >
            <VariableHangerModule
              countShelfs={5}
              countSpaces={3}
              countDrawers={0}
              positionSelf={"top"}
              bottomSpace={true}
              id={19}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 38)}
            $isAllowed={checkIsAllowedSection(38)}
          >
            <VariableHangerModule
              countShelfs={3}
              countSpaces={1}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomSpace={false}
              bottomShelf={true}
              id={38}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 32)}
            $isAllowed={checkIsAllowedSection(32)}
          >
            <VariableHangerModule
              countShelfs={3}
              countSpaces={2}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={32}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 20)}
            $isAllowed={checkIsAllowedSection(20)}
          >
            <VariableHangerModule
              countShelfs={4}
              countSpaces={3}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={20}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 21)}
            $isAllowed={checkIsAllowedSection(21)}
          >
            <VariableHangerModule
              countShelfs={5}
              countSpaces={4}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={21}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 33)}
            $isAllowed={checkIsAllowedSection(33)}
          >
            <VariableHangerModule
              countShelfs={4}
              countSpaces={1}
              countDrawers={1}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={33}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 22)}
            $isAllowed={checkIsAllowedSection(22)}
          >
            <VariableHangerModule
              countShelfs={4}
              countSpaces={1}
              countDrawers={2}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={22}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 23)}
            $isAllowed={checkIsAllowedSection(23)}
          >
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={3}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={23}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 24)}
            $isAllowed={checkIsAllowedSection(24)}
          >
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={4}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={24}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 34)}
            $isAllowed={checkIsAllowedSection(34)}
          >
            <VariableHangerModule
              countShelfs={4}
              countSpaces={0}
              countDrawers={1}
              positionSelf={"bottom"}
              bottomSpace={true}
              bottomShelf={true}
              id={34}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 35)}
            $isAllowed={checkIsAllowedSection(35)}
          >
            <VariableHangerModule
              countShelfs={4}
              countSpaces={0}
              countDrawers={2}
              positionSelf={"bottom"}
              bottomSpace={true}
              bottomShelf={true}
              id={35}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 39)}
            $isAllowed={checkIsAllowedSection(39)}
          >
            <VariableHangerModule
              countShelfs={4}
              countSpaces={0}
              countDrawers={3}
              positionSelf={"bottom"}
              bottomSpace={true}
              bottomShelf={true}
              id={39}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 25)}
            $isAllowed={checkIsAllowedSection(25)}
          >
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={0}
              countHangers={2}
              positionSelf={"bottom"}
              bottomSpace={false}
              id={25}
            />
          </$.SectionType>
        </$.TypeSectionsWrap>
      </$.Wrap>
    </>
  );
};

export default TypeSections;
