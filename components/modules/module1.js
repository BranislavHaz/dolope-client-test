import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";

const Module1 = () => {
  const { thickness, moduleHeight } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleHeight: state.moduleHeight,
  }));

  const spaceSize = (moduleHeight - 5 * thickness) / 5;

  return (
    <$.Module>
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
    </$.Module>
  );
};

export default Module1;
