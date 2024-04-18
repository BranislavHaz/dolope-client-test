import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Space.styled";

const Space = ({ heightDisplay, heightReal, children }) => {
  const { viewportSizes } = useMainStore((state) => ({
    viewportSizes: state.viewportSizes,
  }));

  const isLinesVisible = viewportSizes.section.width > 40 && heightDisplay > 30;

  return (
    <$.Space $width={viewportSizes.section.width} $height={heightDisplay}>
      {children}
      {isLinesVisible && (
        <>
          <$.Line />
          <$.HeightText>{Math.floor(heightReal) / 10} cm</$.HeightText>
        </>
      )}
    </$.Space>
  );
};

export default Space;
