import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "@/styles/components/elements/Rail.styled";

const Rail = ({ type }) => {
  const { viewport, wardrobe, rails } = useWardrobeStore((state) => ({
    viewport: state.viewport,
    wardrobe: state.wardrobe,
    rails: state.rails,
  }));
  const { px } = viewport;

  const getRailWidth = () => {
    if (wardrobe.type === 1) {
      return wardrobe.width - 2 * viewport.thickness;
    } else if (wardrobe.type === 2 || wardrobe.type === 3) {
      return wardrobe.width - viewport.thickness;
    } else {
      return wardrobe.corpus.width;
    }
  };

  const railHeight = type === "top" ? rails.heightTop : rails.heightBottom;

  return (
    <$.Rail
      $width={px * getRailWidth()}
      $subtractionWidth={px * 2 * viewport.thickness}
      $height={px * railHeight}
      $type={type}
      $positionLeft={px * viewport.thickness}
    />
  );
};

export default Rail;
