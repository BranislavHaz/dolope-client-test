import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";

const Module17 = ({ variableHeightDisplay, variableHeightReal }) => {
  const { wardrobe, corpus, viewportSizes } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewportSizes: state.viewportSizes,
  }));

  const spaceSizeDisplay =
    (viewportSizes.corpus.height -
      3 * viewportSizes.wardrobe.thicknessDTD -
      variableHeightDisplay) /
    2;
  const spaceSizeReal =
    Math.floor(corpus.height - 3 * wardrobe.thickness - variableHeightReal) / 2;

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space
        heightDisplay={variableHeightDisplay}
        heightReal={variableHeightReal}
      >
        <Hanger />
      </Space>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
    </$.Module>
  );
};

export default Module17;
