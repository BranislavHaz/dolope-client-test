import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module29 = () => {
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
      viewportSizes.drawers.height[3]) /
    2;
  const spaceSizeReal =
    Math.floor(
      corpus.height - 4 * wardrobe.thickness - drawers.heightOfDrawers[3]
    ) / 2;

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Drawers numOfDrawers={3} />
      <Shelf />
    </$.Module>
  );
};

export default Module29;
