import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";

const Module3 = () => {
  const { wardrobe, hangers, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    hangers: state.hangers,
    viewport: state.viewport,
  }));

  const spaceSize1 = 300;
  const spaceSize2 = hangers.topSpace;
  const spaceSize3 =
    wardrobe.corpus.height -
    3 * viewport.thickness -
    spaceSize1 -
    spaceSize2 -
    hangers.height;

  return (
    <$.Module>
      <Shelf />
      <Space height={spaceSize1} />
      <Shelf />
      <Space height={spaceSize2} isVisible={false} />
      <Hanger />
      <Space height={spaceSize3} />
      <Shelf />
    </$.Module>
  );
};

export default Module3;
