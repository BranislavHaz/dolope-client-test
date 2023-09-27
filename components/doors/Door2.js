import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Doors.styled";

import HProfile from "../elements/HProfile";

const Door2 = () => {
  const { viewport, doors } = useMainStore((state) => ({
    viewport: state.viewport,
    doors: state.doors,
  }));

  const { px } = viewport;
  const { hProfile } = doors.dimensionsFromManual;

  const partHeight =
    (doors.height - hProfile.heightReserve - hProfile.height * 1.5) / 2;

  return (
    <$.Door>
      <$.DoorPart $width={px * doors.width} $height={px * partHeight} />
      <HProfile />
      <$.DoorPart $width={px * doors.width} $height={px * partHeight} />
    </$.Door>
  );
};

export default Door2;
