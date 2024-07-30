import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const ModuleEmpty = () => {
  const { wardrobe, corpus, viewportSizes } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewportSizes: state.viewportSizes,
  }));

  const spaceSizeDisplay =
    viewportSizes.corpus.height - 2 * viewportSizes.wardrobe.thicknessDTD;
  const spaceSizeReal = corpus.height - 2 * wardrobe.thickness;

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
    </$.Module>
  );
};

export default ModuleEmpty;
