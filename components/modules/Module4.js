import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module4 = () => {
  const { wardrobe, sections, drawers } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    sections: state.sections,
    drawers: state.drawers,
  }));

  const spaceSize1 = 300;
  const spaceSize2 =
    sections.height -
    4 * wardrobe.thickness -
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
