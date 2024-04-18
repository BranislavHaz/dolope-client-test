import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module14 = ({ variableHeightDisplay, variableHeightReal }) => {
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
      5 * viewportSizes.thicknessDtd -
      viewportSizes.drawers.height[3] -
      variableHeightDisplay) /
    3;
  const spaceSizeReal =
    Math.floor(
      corpus.height -
        5 * wardrobe.thickness -
        drawers.heightOfDrawers[3] -
        variableHeightReal
    ) / 3;

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Drawers numOfDrawers={3} />
      <Shelf />
      <Space
        heightDisplay={variableHeightDisplay}
        heightReal={variableHeightReal}
      />
    </$.Module>
  );
};

export default Module14;
