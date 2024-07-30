import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";
import Hanger from "../elements/Hanger";

const Module24 = () => {
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
    3 * viewportSizes.wardrobe.thicknessDTD -
    viewportSizes.drawers.height[4];
  const spaceSizeReal =
    corpus.height - 3 * wardrobe.thickness - drawers.heightOfDrawers[4];

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal}>
        <Hanger />
      </Space>
      <Shelf />
      <Drawers numOfDrawers={4} />
      <Shelf />
    </$.Module>
  );
};

export default Module24;
