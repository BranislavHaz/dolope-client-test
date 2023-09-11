import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module4 = () => {
  const { wardrobe, drawers, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    drawers: state.drawers,
    viewport: state.viewport,
  }));

  const spaceSize1 = 300;
  const spaceSize2 =
    wardrobe.corpus.height -
    4 * viewport.thickness -
    spaceSize1 -
    drawers.heightOfDrawers[1];

  return (
    <$.Module>
      <Shelf />
      <Space height={spaceSize1} />
      <Shelf />
      <Space height={spaceSize2} />
      <Shelf />
      <Drawers numOfDrawers={1} />
      <Shelf />
    </$.Module>
  );
};

export default Module4;
