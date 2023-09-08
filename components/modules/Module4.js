import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module4.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";
import DrawerSingle from "../elements/drawers/DrawerSingle";

const Module4 = () => {
  const { thickness, moduleHeight, mm, drawers } = useWardrobeStore(
    (state) => ({
      thickness: state.thickness,
      moduleHeight: state.moduleHeight,
      mm: state.mm,
      drawers: state.drawers,
    })
  );

  const spaceSize1 = 300;
  const spaceSize2 =
    moduleHeight - 4 * thickness - spaceSize1 - drawers.drawerSingleHeight;

  return (
    <$.Module4>
      <Shelf />
      <Space height={spaceSize1} />
      <Shelf />
      <Space height={spaceSize2} />
      <Shelf />
      <DrawerSingle />
      <Shelf />
    </$.Module4>
  );
};

export default Module4;
