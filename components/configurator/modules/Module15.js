import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module15 = ({ variableHeightDisplay, variableHeightReal }) => {
  const { wardrobe, corpus, drawers, viewportSizes } = useMainStore(
    (state) => ({
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      drawers: state.drawers,
      viewportSizes: state.viewportSizes,
    })
  );

  const spaceSizeDisplay =
    (viewportSizes.corpus.height -
      4 * viewportSizes.wardrobe.thicknessDTD -
      viewportSizes.drawers.height[4] -
      variableHeightDisplay) /
    2;
  const spaceSizeReal =
    Math.floor(
      corpus.height -
        4 * wardrobe.thickness -
        drawers.heightOfDrawers[4] -
        variableHeightReal
    ) / 2;

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Drawers numOfDrawers={4} />
      <Shelf />
      <Space
        heightDisplay={variableHeightDisplay}
        heightReal={variableHeightReal}
      />
    </$.Module>
  );
};

export default Module15;
