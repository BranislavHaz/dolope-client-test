import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const ModuleEmpty = () => {
  const { wardrobe, corpus, sections, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  const spaceSizeDisplay = corpus.height - 2 * viewport.thickness;
  const spaceSizeReal = corpus.height - 2 * wardrobe.thickness;

  return (
    <$.Module $isEmpty={true} $width={px * sections.width}>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
    </$.Module>
  );
};

export default ModuleEmpty;
