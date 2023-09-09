import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./stand.styled";

const Stand = () => {
  const { thickness, sections, viewport } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return <$.Stand $width={px * thickness} $height={px * sections.height} />;
};

export default Stand;
