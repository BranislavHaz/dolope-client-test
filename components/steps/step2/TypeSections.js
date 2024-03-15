import { useState } from "react";
import { checkIfIsActiveSection } from "@/utils/steps/step2/checkIfIsActiveSection";
import useMainStore from "@/stores/useMainStore";
import FilterBox from "../ui/FilterBox";
import Title from "../ui/Title";

import SelfModule from "@/components/modules/modal/SelfModule";
import DrawerModule from "@/components/modules/modal/DrawerModule";
import VariableDrawerModule from "./sectionsElements/VariableDrawerModule";
import HangerModule from "@/components/modules/modal/HangerModule";
import VariableHangerModule from "./sectionsElements/VariableHangerModule";

import * as $ from "@/styles/components/steps/step2/TypeSections.styled";

const TypeSections = () => {
  const { state, sections, activeFilter, setTypeOfSections } = useMainStore(
    (state) => ({
      state: state,
      sections: state.sections,
      activeFilter: state.activeFilter,
      setTypeOfSections: state.setTypeOfSections,
    })
  );

  const [realHeights, setRealHeights] = useState();

  const handleClick = (sectionType) => {
    const sectionId = activeFilter.sections;

    setTypeOfSections({ sectionId, sectionType });
  };

  return (
    <>
      <FilterBox
        type={"sections"}
        count={sections.count}
        active={activeFilter.sections}
      />
      <$.Wrap>
        <Title>Police</Title>
        <$.TypeSectionsWrap>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 1)}
            onClick={() => handleClick(1)}
          >
            <SelfModule countSelfs={3} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 2)}
            onClick={() => handleClick(2)}
          >
            <SelfModule countSelfs={4} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 3)}
            onClick={() => handleClick(3)}
          >
            <SelfModule countSelfs={5} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 4)}
            onClick={() => handleClick(4)}
          >
            <SelfModule countSelfs={6} />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 5)}
            onClick={() => handleClick(5)}
          >
            <SelfModule countSelfs={7} />
          </$.SectionType>
        </$.TypeSectionsWrap>
        <Title>Zásuvky</Title>
        <$.TypeSectionsWrap>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 6)}
            onClick={() => handleClick(6)}
          >
            <DrawerModule
              countDrawers={2}
              countShelfs={7}
              countSpaces={5}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 7)}
            onClick={() => handleClick(7)}
          >
            <DrawerModule
              countDrawers={3}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 8)}
            onClick={() => handleClick(8)}
          >
            <DrawerModule
              countDrawers={3}
              countShelfs={7}
              countSpaces={5}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 9)}
            onClick={() => handleClick(9)}
          >
            <DrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 10)}
            onClick={() => handleClick(10)}
          >
            <DrawerModule
              countDrawers={4}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableDrawerModule
              countDrawers={2}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableDrawerModule
              countDrawers={2}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableDrawerModule
              countDrawers={3}
              countShelfs={4}
              countSpaces={2}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableDrawerModule
              countDrawers={3}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableDrawerModule
              countDrawers={4}
              countShelfs={4}
              countSpaces={2}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableDrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
            />
          </$.SectionType>
        </$.TypeSectionsWrap>
        <Title>Závěsná tyč</Title>
        <$.TypeSectionsWrap>
          <$.SectionType>
            <VariableHangerModule
              countShelfs={3}
              countSpaces={1}
              countDrawers={0}
              positionSelf={"top"}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableHangerModule
              countShelfs={4}
              countSpaces={2}
              countDrawers={0}
              positionSelf={"top"}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableHangerModule
              countShelfs={5}
              countSpaces={3}
              countDrawers={0}
              positionSelf={"top"}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableHangerModule
              countShelfs={4}
              countSpaces={3}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableHangerModule
              countShelfs={5}
              countSpaces={4}
              countDrawers={0}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
            <VariableHangerModule
              countShelfs={4}
              countSpaces={1}
              countDrawers={2}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 23)}
            onClick={() => handleClick(23)}
          >
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={3}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 24)}
            onClick={() => handleClick(24)}
          >
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={4}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType
            $isActive={checkIfIsActiveSection(state, 25)}
            onClick={() => handleClick(25)}
          >
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={0}
              countHangers={2}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
        </$.TypeSectionsWrap>
      </$.Wrap>
    </>
  );
};

export default TypeSections;
