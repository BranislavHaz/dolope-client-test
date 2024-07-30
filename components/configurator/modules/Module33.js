import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";
import Drawers from "../elements/Drawers";

const Module33 = ({ variableHeightDisplay, variableHeightReal }) => {
  const { wardrobe, corpus, drawers, viewportSizes } = useMainStore(
    (state) => ({
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      drawers: state.drawers,
      viewportSizes: state.viewportSizes,
    })
  );

  const spaceSizeDisplay =
    viewportSizes.corpus.height -
    4 * viewportSizes.wardrobe.thicknessDTD -
    viewportSizes.drawers.height[1] -
    variableHeightDisplay;
  const spaceSizeReal = Math.floor(
    corpus.height -
      4 * wardrobe.thickness -
      drawers.heightOfDrawers[1] -
      variableHeightReal
  );

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
      <Drawers numOfDrawers={1} />
      <Shelf />
    </$.Module>
  );
};

export default Module33;
