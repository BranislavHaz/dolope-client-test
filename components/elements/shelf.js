import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./shelf.styled";

const Shelf = () => {
  const { thickness, sections, viewport } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return <$.Shelf $width={px * sections.width} $height={px * thickness} />;
};

export default Shelf;
