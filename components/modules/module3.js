import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./module3.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";
import Hanger from "../elements/hanger";

const Module3 = () => {
  const { thickness, moduleHeight, hangerHeight, hangerSpace } =
    useWardrobeStore((state) => ({
      thickness: state.thickness,
      moduleHeight: state.moduleHeight,
      hangerHeight: state.hangerHeight,
      hangerSpace: state.hangerSpace,
    }));

  const spaceSize1 = 300;
  const spaceSize2 = hangerSpace;
  const spaceSize3 =
    moduleHeight - 3 * thickness - spaceSize1 - spaceSize2 - hangerHeight;

  return (
    <$.Module3>
      <Shelf />
      <Space height={spaceSize1} />
      <Shelf />
      <Space height={spaceSize2} isVisible={false} />
      <Hanger />
      <Space height={spaceSize3} />
      <Shelf />
    </$.Module3>
  );
};

export default Module3;
