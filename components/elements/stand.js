import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Stand.styled";

const Stand = () => {
  const { wardrobe, sections, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return (
    <$.Stand $width={px * wardrobe.thickness} $height={px * sections.height} />
  );
};

export default Stand;
