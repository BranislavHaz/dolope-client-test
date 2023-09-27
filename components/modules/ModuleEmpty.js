import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const ModuleEmpty = () => {
  const { corpus, sections, viewport } = useMainStore((state) => ({
    corpus: state.corpus,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;
  const spaceSize = corpus.height - 2 * viewport.thickness;

  return (
    <$.Module $isEmpty={true} $width={px * sections.width}>
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
    </$.Module>
  );
};

export default ModuleEmpty;
