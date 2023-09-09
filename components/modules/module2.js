import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module2 = () => {
  const { wardrobe, sections } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    sections: state.sections,
  }));

  const spaceSize = (sections.height - 6 * wardrobe.thickness) / 6;

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
      <Shelf />
      <Space height={spaceSize} />
    </$.Module>
  );
};

export default Module2;
