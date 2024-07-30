import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";
import Hanger from "../elements/Hanger";

const Module23 = () => {
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
    viewportSizes.drawers.height[3];
  const spaceSizeReal =
    corpus.height - 3 * wardrobe.thickness - drawers.heightOfDrawers[3];

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal}>
        <Hanger />
      </Space>
      <Shelf />
      <Drawers numOfDrawers={3} />
      <Shelf />
    </$.Module>
  );
};

export default Module23;
