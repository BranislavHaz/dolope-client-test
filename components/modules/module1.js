import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";

const Module1 = () => {
  const { thickness, sections } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    sections: state.sections,
  }));

  const spaceSize = (sections.height - 5 * thickness) / 5;

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
