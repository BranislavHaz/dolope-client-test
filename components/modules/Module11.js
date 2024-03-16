import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module11 = ({ variableHeight }) => {
  const { wardrobe, corpus, drawers, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    drawers: state.drawers,
    viewport: state.viewport,
  }));

  const spaceSizeDisplay =
    Math.floor(
      corpus.height -
        5 * viewport.thickness -
        drawers.heightOfDrawers[2] -
        variableHeight
    ) / 3;
  const spaceSizeReal =
    Math.floor(
      corpus.height -
        5 * wardrobe.thickness -
        drawers.heightOfDrawers[2] -
        variableHeight
    ) / 3;

  return (
    <$.Module $height={corpus.height * viewport.px}>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Drawers numOfDrawers={2} />
      <Shelf />
      <Space heightDisplay={variableHeight} heightReal={variableHeight} />
    </$.Module>
  );
};

export default Module11;
