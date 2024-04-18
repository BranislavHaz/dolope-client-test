import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Rail.styled";

const Rail = ({ type }) => {
  const { viewport, wardrobe, rails, sections, doors, viewportSizes } =
    useMainStore((state) => ({
      viewport: state.viewport,
      wardrobe: state.wardrobe,
      rails: state.rails,
      sections: state.sections,
      doors: state.doors,
      viewportSizes: state.viewportSizes,
    }));
  const { px } = viewport;

  const railWidth =
    viewportSizes.wardrobe.width - 2 * viewportSizes.wardrobe.thicknessDTD;

  const railHeight = type === "top" ? rails.heightTop : rails.heightBottom;

  return (
    <$.Rail
      $width={railWidth}
      $height={px * railHeight}
      $type={type}
      $positionLeft={viewportSizes.wardrobe.thicknessDTD}
      $profileColor={doors.selectedProfile.color}
    />
  );
};

export default Rail;
