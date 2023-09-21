import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Space.styled";

const Space = ({ height, isVisible = true }) => {
  const { sections, viewport } = useMainStore((state) => ({
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return (
    <$.Space $width={px * sections.width} $height={px * height}>
      {isVisible && <$.Line />}
      {isVisible && <$.HeightText>{Math.floor(height) / 10} cm</$.HeightText>}
    </$.Space>
  );
};

export default Space;
