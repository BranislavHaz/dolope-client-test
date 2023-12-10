import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Doors.styled";

import HProfile from "../elements/HProfile";

const Door = ({ width, height, overhang, id, children }) => {
  const { viewport, doors } = useMainStore((state) => ({
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

      if (i < countOfSections) {
        doorElement.push(
          <$.DoorSection key={i}>
            <$.DoorPart
              $width={px * currentSection.width}
              $height={px * currentSection.height}
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
            />
          </$.DoorSection>
        );
      }
    }

    return doorElement;
  };

  return (
    <$.DoorWrapper $width={width} $height={height} $overhang={overhang}>
      <$.Door>{doors.typeDoors[id] && getDoorElements()}</$.Door>
      {/* <DoorType /> */}
      {children}
    </$.DoorWrapper>
  );
};

export default Door;
