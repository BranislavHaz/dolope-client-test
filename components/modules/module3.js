import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";
import Hanger from "../elements/hanger";

const Module3 = () => {
  const { thickness, moduleHeight, hanger } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleHeight: state.moduleHeight,
    hanger: state.hanger,
  }));

  const spaceSize1 = 300;
  const spaceSize2 = hanger.topSpace;
  const spaceSize3 =
    moduleHeight - 3 * thickness - spaceSize1 - spaceSize2 - hanger.height;

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
