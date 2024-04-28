import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/getDecorUrl";

import * as $ from "@/styles/components/elements/Doors.styled";

import Handle from "./Handle";
import HProfile from "../elements/HProfile";

const Door = ({ id, type }) => {
  const {
    state,
    doors,
    viewportSizes,
    activeDoorSection,
    setActiveDoorSection,
  } = useMainStore((state) => ({
    state: state,
    doors: state.doors,
    viewportSizes: state.viewportSizes,
    activeDoorSection: state.activeDoorSection,
    setActiveDoorSection: state.setActiveDoorSection,
  }));

  const currentDoorSections = doors?.typeDoors[id]?.sections;
  const countOfSections =
    currentDoorSections && Object.keys(currentDoorSections).length;

  const handleClickSection = (sectionId) => {
    setActiveDoorSection({ doorId: id, sectionId: sectionId });
  };

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
              $type={type}
              $isActive={
                type === "modal"
                  ? activeDoorSection.doorId === id &&
                    activeDoorSection.sectionId === i
                  : false
              }
              onClick={() => type === "modal" && handleClickSection(i)}
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
              $type={type}
              $isActive={
                type === "modal"
                  ? activeDoorSection.doorId === id &&
                    activeDoorSection.sectionId === i
                  : false
              }
              onClick={() => type === "modal" && handleClickSection(i)}
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
      $overhang={viewportSizes.wardrobe.thicknessDTD * 2}
      $type={type}
    >
      <Handle />
      <$.Door>{doors.typeDoors[id] && getDoorElements()}</$.Door>
      <Handle />
    </$.DoorWrapper>
  );
};

export default Door;
