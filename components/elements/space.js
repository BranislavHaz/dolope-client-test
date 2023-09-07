import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./space.styled";

const Space = ({ height, isVisible = true }) => {
  const { moduleWidth, mm } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    mm: state.mm,
  }));

  return (
    <$.Space $width={mm * moduleWidth} $height={mm * height}>
      {isVisible && `${Math.floor(moduleWidth)} x ${Math.floor(height)} mm`}
    </$.Space>
  );
};

export default Space;
