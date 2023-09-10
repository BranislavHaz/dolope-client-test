import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./ModuleEmpty.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const ModuleEmpty = () => {
  const { wardrobe, sections, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;
  const spaceSize = wardrobe.corpus.height - 2 * viewport.thickness;

  return (
    <$.ModuleEmpty $width={px * sections.width}>
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
    </$.ModuleEmpty>
  );
};

export default ModuleEmpty;
