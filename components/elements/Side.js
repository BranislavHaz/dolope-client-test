import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Side.styled";

const Side = ({ location }) => {
  const { wardrobe, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  const isABar = (location) => {
    if (location === "left") {
      return wardrobe.type === 1 || wardrobe.type === 2 ? true : false;
    }
    if (location === "right") {
      return wardrobe.type === 1 || wardrobe.type === 3 ? true : false;
    }
    return false;
  };

  return (
    <$.Side
      $width={px * viewport.thickness}
      $height={px * wardrobe.height}
      $location={location}
      $isABar={isABar(location)}
    />
  );
};

export default Side;
