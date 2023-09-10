import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module1 = () => {
  const { wardrobe, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    viewport: state.viewport,
  }));

  const spaceSize = (wardrobe.corpus.height - 5 * viewport.thickness) / 5;

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
