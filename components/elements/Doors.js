import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Doors.styled";

import Handle from "./Handle";
import Door from "./Door";

const Doors = () => {
  const { viewport, wardrobe, sections, doors } = useMainStore((state) => ({
    viewport: state.viewport,
    wardrobe: state.wardrobe,
    sections: state.sections,
    doors: state.doors,
  }));

  const { px } = viewport;

  const getClearWidth = () => {
    const standsThickness = (sections.count + 1) * viewport.thickness;
    const sectionsWidth = sections.count * sections.width;

    switch (wardrobe.type) {
      case 1:
        return standsThickness + sectionsWidth - 2 * viewport.thickness;
      case 2:
      case 3:
        return standsThickness + sectionsWidth - viewport.thickness;
      default:
        return standsThickness + sectionsWidth;
    }
  };

  const getDoorWidth = () => {
    return (
      getClearWidth() / doors.count +
      viewport.thickness -
      viewport.thickness / doors.count
    );
  };

  return (
    <$.Doors $positionLeft={px * viewport.thickness}>
      {Array.from({ length: doors.count }, (_, index) => (
        <Door
          width={px * getDoorWidth()}
          height={px * doors.height}
          overhang={px * viewport.thickness}
          id={index + 1}
          key={index}
        >
          <Handle width={px * viewport.thickness} isFirst={index === 0} />
          <Handle
            width={px * viewport.thickness}
            isLast={index === doors.count - 1}
          />
        </Door>
      ))}
    </$.Doors>
  );
};

export default Doors;
