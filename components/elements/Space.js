import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Space.styled";

const Space = ({ heightDisplay, heightReal, isVisible = true, children }) => {
  const { sections, viewport } = useMainStore((state) => ({
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  const verifyIsVisible = () => {
    const width = px * sections.width;
    const height = px * heightDisplay;

    if (width > 35 && height > 30) return true;
    else return false;
  };

  const isLinesVisible = verifyIsVisible();

  return (
    <$.Space $width={px * sections.width} $height={px * heightDisplay}>
      {children}
      {isLinesVisible && <$.Line />}
      {isLinesVisible && (
        <$.HeightText>{Math.floor(heightReal) / 10} cm</$.HeightText>
      )}
    </$.Space>
  );
};

export default Space;
