import useMainStore from "@/stores/useMainStore";
import FilterBox from "../ui/FilterBox";
import Title from "../ui/Title";
import Module1 from "@/components/modules/Module1";
import Module2 from "@/components/modules/Module2";
import Module6 from "@/components/modules/Module6";

import SelfModule from "@/components/modules/modal/SelfModule";
import DrawerModule from "@/components/modules/modal/DrawerModule";

import * as $ from "@/styles/components/steps/step2/TypeSections.styled";

const TypeSections = () => {
  const { viewport, sections, activeFilter } = useMainStore((state) => ({
    viewport: state.viewport,
    sections: state.sections,
    activeFilter: state.activeFilter,
  }));

  const { px } = viewport;

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
            <DrawerModule
              countDrawers={2}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={2}
              countShelfs={6}
              countSpaces={4}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={3}
              countShelfs={4}
              countSpaces={2}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={3}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={4}
              countShelfs={4}
              countSpaces={2}
              bottomShelf={true}
            />
          </$.SectionType>
          <$.SectionType>
            <DrawerModule
              countDrawers={4}
              countShelfs={5}
              countSpaces={3}
              bottomShelf={true}
            />
          </$.SectionType>
        </$.TypeSectionsWrap>
      </$.Wrap>
    </>
  );
};

export default TypeSections;
