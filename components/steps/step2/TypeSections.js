import { useEffect, useState } from "react";
import { checkIfIsActiveSection } from "@/utils/steps/step2/checkIfIsActiveSection";
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

  return (
    <>
      <$.Wrap>
        <Title>Police</Title>
        <$.TypeSectionsWrap $sectionWidth={state.viewportSizes.modal.elWidth}>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 1)}>
            <SelfModule countSelfs={3} id={1} />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 2)}>
            <SelfModule countSelfs={4} id={2} />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 3)}>
            <SelfModule countSelfs={5} id={3} />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 4)}>
            <SelfModule countSelfs={6} id={4} />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 5)}>
            <SelfModule countSelfs={7} id={5} />
          </$.SectionType>
        </$.TypeSectionsWrap>
        <Title>Zásuvky</Title>
        <$.TypeSectionsWrap $sectionWidth={state.viewportSizes.modal.elWidth}>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 6)}>
            <DrawerModule
              countDrawers={2}
              countShelfs={7}
              countSpaces={5}
              bottomShelf={false}
              id={6}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 7)}>
            <DrawerModule
              countDrawers={3}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={false}
              id={7}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 8)}>
            <DrawerModule
              countDrawers={3}
              countShelfs={7}
              countSpaces={5}
              bottomShelf={false}
              id={8}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 9)}>
            <DrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={false}
              id={9}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 10)}>
            <DrawerModule
              countDrawers={4}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={false}
              id={10}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 11)}>
            <VariableDrawerModule
              countDrawers={2}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
              id={11}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 12)}>
            <VariableDrawerModule
              countDrawers={2}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={true}
              id={12}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 13)}>
            <VariableDrawerModule
              countDrawers={3}
              countShelfs={4}
              countSpaces={2}
              bottomShelf={true}
              id={13}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 14)}>
            <VariableDrawerModule
              countDrawers={3}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
              id={14}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 15)}>
            <VariableDrawerModule
              countDrawers={4}
              countShelfs={4}
              countSpaces={2}
              bottomShelf={true}
              id={15}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 16)}>
            <VariableDrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
              id={16}
            />
          </$.SectionType>
        </$.TypeSectionsWrap>
        <Title>Závěsná tyč</Title>
        <$.TypeSectionsWrap $sectionWidth={state.viewportSizes.modal.elWidth}>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 17)}>
            <VariableHangerModule
              countShelfs={3}
              countSpaces={1}
              countDrawers={0}
              positionSelf={"top"}
              bottomShelf={true}
              id={17}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 18)}>
            <VariableHangerModule
              countShelfs={4}
              countSpaces={2}
              countDrawers={0}
              positionSelf={"top"}
              bottomShelf={true}
              id={18}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 19)}>
            <VariableHangerModule
              countShelfs={5}
              countSpaces={3}
              countDrawers={0}
              positionSelf={"top"}
              bottomShelf={true}
              id={19}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 20)}>
            <VariableHangerModule
              countShelfs={4}
              countSpaces={3}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomShelf={false}
              id={20}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 21)}>
            <VariableHangerModule
              countShelfs={5}
              countSpaces={4}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomShelf={false}
              id={21}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 22)}>
            <VariableHangerModule
              countShelfs={4}
              countSpaces={1}
              countDrawers={2}
              positionSelf={"bottom"}
              bottomShelf={false}
              id={22}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 23)}>
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={3}
              positionSelf={"bottom"}
              bottomShelf={false}
              id={23}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 24)}>
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={4}
              positionSelf={"bottom"}
              bottomShelf={false}
              id={24}
            />
          </$.SectionType>
          <$.SectionType $isActive={checkIfIsActiveSection(state, 25)}>
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={0}
              countHangers={2}
              positionSelf={"bottom"}
              bottomShelf={false}
              id={25}
            />
          </$.SectionType>
        </$.TypeSectionsWrap>
      </$.Wrap>
    </>
  );
};

export default TypeSections;
