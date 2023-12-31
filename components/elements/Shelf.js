import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Shelf.styled";

const Shelf = () => {
  const { wardrobe, sections, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return (
    <$.Shelf $width={px * sections.width} $height={px * viewport.thickness} />
  );
};

export default Shelf;
