import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";
import Drawers from "../elements/Drawers";

const Module22 = ({ variableHeight }) => {
  const { wardrobe, corpus, drawers, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    drawers: state.drawers,
    viewport: state.viewport,
  }));

  const spaceSizeDisplay = Math.floor(
    corpus.height -
      4 * viewport.thickness -
      drawers.heightOfDrawers[2] -
      variableHeight
  );
  const spaceSizeReal = Math.floor(
    corpus.height -
      4 * wardrobe.thickness -
      drawers.heightOfDrawers[2] -
      variableHeight
  );

  return (
    <$.Module $height={corpus.height * viewport.px}>
      <Shelf />
      <Space heightDisplay={variableHeight} heightReal={variableHeight}>
        <Hanger />
      </Space>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Drawers numOfDrawers={2} />
      <Shelf />
    </$.Module>
  );
};

export default Module22;
