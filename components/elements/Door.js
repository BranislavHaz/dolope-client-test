import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/getDecorUrl";

import * as $ from "@/styles/components/elements/Doors.styled";

import HProfile from "../elements/HProfile";

const Door = ({ width, height, overhang, id, children }) => {
  const { state, viewport, doors } = useMainStore((state) => ({
    state: state,
    viewport: state.viewport,
    doors: state.doors,
  }));

  const { px } = viewport;
  const currentDoorSections = doors?.typeDoors[id]?.sections;
  const countOfSections =
    currentDoorSections && Object.keys(currentDoorSections).length;

  const getDoorElements = () => {
    const doorElement = [];

    for (let i = 1; i <= countOfSections; i++) {
      const currentSection = doors.typeDoors[id].sections[i];
      const decorUrl = getDecorUrl({
        state,
        type: "door",
        doorId: id,
        doorSectionId: i,
      });

      if (i < countOfSections) {
        doorElement.push(
          <$.DoorSection key={i}>
            <$.DoorPart
              $width={px * currentSection.width}
              $height={px * currentSection.height}
              $bgImg={decorUrl}
            />
            <HProfile />
          </$.DoorSection>
        );
      } else {
        doorElement.push(
          <$.DoorSection key={i}>
            <$.DoorPart
              $width={px * currentSection.width}
              $height={px * currentSection.height}
              $bgImg={decorUrl}
            />
          </$.DoorSection>
        );
      }
    }

    return doorElement;
  };

  return (
    <$.DoorWrapper
      $width={width}
      $height={height}
      $overhang={overhang}
      $isVisible={doors.isVisible}
    >
      <$.Door>{doors.typeDoors[id] && getDoorElements()}</$.Door>
      {children}
    </$.DoorWrapper>
  );
};

export default Door;
