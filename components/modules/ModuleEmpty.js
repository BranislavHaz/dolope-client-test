import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./ModuleEmpty.styled";

const ModuleEmpty = () => {
  const { sections, viewport } = useWardrobeStore((state) => ({
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return <$.ModuleEmpty $width={px * sections.width} />;
};

export default ModuleEmpty;
