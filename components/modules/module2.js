import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module2 = () => {
  const { wardrobe, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    viewport: state.viewport,
  }));

  const spaceSize = (wardrobe.corpus.height - 6 * viewport.thickness) / 6;

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
