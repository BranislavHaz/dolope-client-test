import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Space.styled";

const Space = ({ heightDisplay, heightReal, children }) => {
  const { viewportSizes } = useMainStore((state) => ({
    viewportSizes: state.viewportSizes,
  }));

  const getSizeFont = () => {
    if (viewportSizes.section.width > 53 && heightDisplay > 20) {
      return "large";
    } else if (viewportSizes.section.width > 30 && heightDisplay > 20) {
      return "medium";
    } else if (viewportSizes.section.width > 15 && heightDisplay > 17) {
      return "small";
    } else {
      return false;
    }
  };

  console.log("heightDisplay");
  console.log(heightDisplay);

  return (
    <$.Space $width={viewportSizes.section.width} $height={heightDisplay}>
      {children}

      <$.Line />
      <$.HeightText $fontSize={getSizeFont()}>
        {Math.floor(heightReal) / 10} cm
      </$.HeightText>
    </$.Space>
  );
};

export default Space;
