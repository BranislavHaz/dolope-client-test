import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Doors.styled";

import DoorEmpty from "../doors/DoorEmpty";
import Door1 from "../doors/Door1";
import Door2 from "../doors/Door2";
import Door3 from "../doors/Door3";
import Door4 from "../doors/Door4";
import Door5 from "../doors/Door5";

const doorsMap = {
  0: DoorEmpty,
  1: Door1,
  2: Door2,
  3: Door3,
  4: Door4,
  5: Door5,
};

const Door = ({ width, height, overhang, id, children }) => {
  const { doors } = useMainStore((state) => ({
    doors: state.doors,
  }));

  const getDoorType = (doorId) => {
    const { type } = doors.typeOfDoors[`door${doorId}`];
    return type;
  };

  const DoorType = doorsMap[getDoorType(id)];

  return (
    <$.DoorWrapper $width={width} $height={height} $overhang={overhang}>
      <DoorType />
      {children}
    </$.DoorWrapper>
  );
};

export default Door;
