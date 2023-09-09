import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module1 = () => {
  const { wardrobe, sections } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    sections: state.sections,
  }));

  const spaceSize = (sections.height - 5 * wardrobe.thickness) / 5;

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
