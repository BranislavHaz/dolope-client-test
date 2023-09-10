import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Side.styled";

const Side = ({ location }) => {
  const { wardrobe, viewport } = useWardrobeStore((state) => ({
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
