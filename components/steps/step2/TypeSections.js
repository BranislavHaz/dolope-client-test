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
  const { sections, activeFilter } = useMainStore((state) => ({
    sections: state.sections,
    activeFilter: state.activeFilter,
  }));

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
          <$.SectionType>
            <SelfModule countSelfs={3} />
          </$.SectionType>
          <$.SectionType>
            <SelfModule countSelfs={4} />
          </$.SectionType>
          <$.SectionType>
            <SelfModule countSelfs={5} />
          </$.SectionType>
          <$.SectionType>
            <SelfModule countSelfs={6} />
          </$.SectionType>
          <$.SectionType>
            <SelfModule countSelfs={7} />
          </$.SectionType>
        </$.TypeSectionsWrap>
        <Title>Zásuvky</Title>
        <$.TypeSectionsWrap>
          <$.SectionType>
            <DrawerModule
              countDrawers={2}
              countShelfs={7}
              countSpaces={5}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={3}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={3}
              countShelfs={7}
              countSpaces={5}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
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
          <$.SectionType>
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={3}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
            <HangerModule
              countSelf={3}
              countSpaces={0}
              countDrawers={4}
              positionSelf={"bottom"}
              bottomShelf={false}
            />
          </$.SectionType>
          <$.SectionType>
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
