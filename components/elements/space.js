import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./space.styled";

const Space = ({ height, isVisible = true }) => {
  const { moduleWidth, mm } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    mm: state.mm,
  }));

  return (
    <$.Space $width={mm * moduleWidth} $height={mm * height}>
      {isVisible && <$.Line />}
      {isVisible && <$.HeightText>{Math.floor(height) / 10} cm</$.HeightText>}
    </$.Space>
  );
};

export default Space;
