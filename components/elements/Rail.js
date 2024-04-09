import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Rail.styled";

const Rail = ({ type }) => {
  const { viewport, wardrobe, rails, sections, doors } = useMainStore(
    (state) => ({
      viewport: state.viewport,
      wardrobe: state.wardrobe,
      rails: state.rails,
      sections: state.sections,
      doors: state.doors,
    })
  );
  const { px } = viewport;

  const getRailWidth = () => {
    const standsThickness = (sections.count + 1) * viewport.thickness;
    const sectionsWidth = sections.count * sections.width;

    switch (wardrobe.type) {
      case 1:
        return standsThickness + sectionsWidth - 2 * viewport.thickness;
      case 2:
      case 3:
        return standsThickness + sectionsWidth - viewport.thickness;
      default:
        return standsThickness + sectionsWidth;
    }
  };

  const railHeight = type === "top" ? rails.heightTop : rails.heightBottom;

  return (
    <$.Rail
      $width={px * getRailWidth()}
      $height={px * railHeight}
      $type={type}
      $positionLeft={px * viewport.thickness}
      $profileColor={doors.selectedProfile.color}
    />
  );
};

export default Rail;
