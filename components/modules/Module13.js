import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module13 = ({ variableHeight }) => {
  const { wardrobe, corpus, drawers, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    drawers: state.drawers,
    viewport: state.viewport,
  }));

  const spaceSizeDisplay =
    Math.floor(
      corpus.height -
        4 * viewport.thickness -
        drawers.heightOfDrawers[3] -
        variableHeight
    ) / 2;
  const spaceSizeReal =
    Math.floor(
      corpus.height -
        4 * wardrobe.thickness -
        drawers.heightOfDrawers[3] -
        variableHeight
    ) / 2;

  return (
    <$.Module $height={corpus.height * viewport.px}>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Drawers numOfDrawers={3} />
      <Shelf />
      <Space heightDisplay={variableHeight} heightReal={variableHeight} />
    </$.Module>
  );
};

export default Module13;
