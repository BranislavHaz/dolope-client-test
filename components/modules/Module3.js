import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module3 = () => {
  const { wardrobe, corpus, viewportSizes } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewportSizes: state.viewportSizes,
  }));

  const spaceSizeDisplay =
    (viewportSizes.heightCorpus - 5 * viewportSizes.thicknessDtd) / 5;
  const spaceSizeReal = (corpus.height - 5 * wardrobe.thickness) / 5;

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
    </$.Module>
  );
};

export default Module3;
