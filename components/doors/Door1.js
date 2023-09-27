import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Doors.styled";

const Door1 = () => {
  const { viewport, doors } = useMainStore((state) => ({
    viewport: state.viewport,
    doors: state.doors,
  }));

  const { px } = viewport;

  return (
    <$.Door>
      <$.DoorPart $width={px * doors.width} $height={px * doors.height} />
    </$.Door>
  );
};

export default Door1;
