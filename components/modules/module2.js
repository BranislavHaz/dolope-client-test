import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./module2.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";

const Module2 = () => {
  const { thickness, moduleHeight } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleHeight: state.moduleHeight,
  }));

  const spaceSize = (moduleHeight - 6 * thickness) / 6;

  return (
    <$.Module2>
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
    </$.Module2>
  );
};

export default Module2;
