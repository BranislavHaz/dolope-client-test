import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Shelf.styled";

const Shelf = () => {
  const { wardrobe, sections, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return (
    <$.Shelf $width={px * sections.width} $height={px * wardrobe.thickness} />
  );
};

export default Shelf;
