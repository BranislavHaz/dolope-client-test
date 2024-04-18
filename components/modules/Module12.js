import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module12 = ({ variableHeightDisplay, variableHeightReal }) => {
  const { wardrobe, corpus, drawers, viewportSizes } = useMainStore(
    (state) => ({
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      drawers: state.drawers,
      viewportSizes: state.viewportSizes,
    })
  );

  const spaceSizeDisplay =
    (viewportSizes.heightCorpus -
      6 * viewportSizes.thicknessDtd -
      viewportSizes.drawers.height[2] -
      variableHeightDisplay) /
    4;
  const spaceSizeReal =
    Math.floor(
      corpus.height -
        6 * wardrobe.thickness -
        drawers.heightOfDrawers[2] -
        variableHeightReal
    ) / 4;

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
      <Drawers numOfDrawers={2} />
      <Shelf />
      <Space
        heightDisplay={variableHeightDisplay}
        heightReal={variableHeightReal}
      />
    </$.Module>
  );
};

export default Module12;
