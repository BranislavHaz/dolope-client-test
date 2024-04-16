import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module5 = () => {
  const { wardrobe, corpus, viewportSizes } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewportSizes: state.viewportSizes,
  }));

  const spaceSizeDisplay =
    (viewportSizes.heightCorpus - 7 * viewportSizes.thicknessDtd) / 7;
  const spaceSizeReal = (corpus.height - 7 * wardrobe.thickness) / 7;

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
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
    </$.Module>
  );
};

export default Module5;
