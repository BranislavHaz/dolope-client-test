import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";
import Hanger from "../elements/Hanger";

const Module23 = () => {
  const { corpus, hangers, drawers, viewport } = useMainStore((state) => ({
    corpus: state.corpus,
    hangers: state.hangers,
    drawers: state.drawers,
    viewport: state.viewport,
  }));

  const spaceSizeHanger = hangers.topSpace;
  const spaceSize =
    corpus.height -
    spaceSizeHanger -
    hangers.height -
    3 * viewport.thickness -
    drawers.heightOfDrawers[3];

  return (
    <$.Module $height={corpus.height * viewport.px}>
      <Shelf />
      <Space height={spaceSizeHanger} isVisible={false} />
      <Hanger />
      <Space height={spaceSize} />
      <Shelf />
      <Drawers numOfDrawers={3} />
      <Shelf />
    </$.Module>
  );
};

export default Module23;
