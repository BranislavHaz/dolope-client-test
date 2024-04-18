import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Doors.styled";

import Door from "./Door";

const Doors = () => {
  const { doors, viewportSizes } = useMainStore((state) => ({
    doors: state.doors,
    viewportSizes: state.viewportSizes,
  }));

  return (
    <$.Doors $positionLeft={viewportSizes.wardrobe.thicknessDTD}>
      {Array.from({ length: doors.count }, (_, index) => (
        <Door id={index + 1} key={index} />
      ))}
    </$.Doors>
  );
};

export default Doors;
