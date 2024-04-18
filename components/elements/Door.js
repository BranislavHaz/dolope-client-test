import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/getDecorUrl";

import * as $ from "@/styles/components/elements/Doors.styled";

import Handle from "./Handle";
import HProfile from "../elements/HProfile";

const Door = ({ id }) => {
  const { state, doors, viewportSizes } = useMainStore((state) => ({
    state: state,
    doors: state.doors,
    viewportSizes: state.viewportSizes,
  }));

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

      const heightSection = Number(
        (currentSection.height / doors.height) * viewportSizes.door.height
      ).toFixed(2);

      if (i < countOfSections) {
        doorElement.push(
          <$.DoorSection key={i}>
            <$.DoorPart
              $width={viewportSizes.door.width}
              $height={heightSection}
              $bgImg={decorUrl}
            />
            <HProfile />
          </$.DoorSection>
        );
      } else {
        doorElement.push(
          <$.DoorSection key={i}>
            <$.DoorPart
              $width={viewportSizes.door.width}
              $height={heightSection}
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
      $width={viewportSizes.door.width}
      $height={viewportSizes.door.height}
      $isVisible={doors.isVisible}
      $overhang={viewportSizes.wardrobe.thicknessDTD * 2}
    >
      <Handle />
      <$.Door>{doors.typeDoors[id] && getDoorElements()}</$.Door>
      <Handle />
    </$.DoorWrapper>
  );
};

export default Door;
