import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Doors.styled";

const DoorEmpty = () => {
  const { viewport, doors } = useMainStore((state) => ({
    viewport: state.viewport,
    doors: state.doors,
  }));

  const { px } = viewport;

  return (
    <$.Door>
      <$.DoorPart
        $width={px * doors.width}
        $height={px * doors.height}
        $isEmpty={true}
      />
    </$.Door>
  );
};

export default DoorEmpty;
