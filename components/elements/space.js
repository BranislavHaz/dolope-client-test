import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./space.styled";

const Space = ({ height, isVisible = true }) => {
  const { moduleWidth, px } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    px: state.px,
  }));

  return (
    <$.Space $width={px * moduleWidth} $height={px * height}>
      {isVisible && <$.Line />}
      {isVisible && <$.HeightText>{Math.floor(height) / 10} cm</$.HeightText>}
    </$.Space>
  );
};

export default Space;
