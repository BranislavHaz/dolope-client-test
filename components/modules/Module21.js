import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";

const Module21 = ({ variableHeightDisplay, variableHeightReal }) => {
  const { wardrobe, corpus, viewportSizes } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewportSizes: state.viewportSizes,
  }));

  const spaceSizeDisplay =
    (viewportSizes.heightCorpus -
      5 * viewportSizes.thicknessDtd -
      variableHeightDisplay) /
    4;
  const spaceSizeReal =
    Math.floor(corpus.height - 5 * wardrobe.thickness - variableHeightReal) / 4;

  return (
    <$.Module>
      <Shelf />
      <Space
        heightDisplay={variableHeightDisplay}
        heightReal={variableHeightReal}
      >
        <Hanger />
      </Space>
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

export default Module21;
