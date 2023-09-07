import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./module1.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";

const Module1 = () => {
  const { thickness, moduleHeight } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleHeight: state.moduleHeight,
  }));

  const spaceSize = (moduleHeight - 5 * thickness) / 5;

  return (
    <$.Module1>
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
    </$.Module1>
  );
};

export default Module1;
