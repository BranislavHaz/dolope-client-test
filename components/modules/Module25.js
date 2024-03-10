import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";

const Module25 = () => {
  const { corpus, hangers, viewport } = useMainStore((state) => ({
    corpus: state.corpus,
    hangers: state.hangers,
    viewport: state.viewport,
  }));

  const spaceSizeHanger = hangers.topSpace;
  const spaceSize =
    corpus.height -
    2 * spaceSizeHanger -
    2 * hangers.height -
    3 * viewport.thickness;

  return (
    <$.Module $height={corpus.height * viewport.px}>
      <Shelf />
      <Space height={spaceSizeHanger} isVisible={false} />
      <Hanger />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSizeHanger} isVisible={false} />
      <Hanger />
      <Space height={spaceSize} />
      <Shelf />
    </$.Module>
  );
};

export default Module25;
