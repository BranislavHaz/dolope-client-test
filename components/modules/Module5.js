import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module5 = ({ isInModal = false }) => {
  const { wardrobe, corpus, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  const spaceSizeDisplay = (corpus.height - 7 * viewport.thickness) / 7;
  const spaceSizeReal = (corpus.height - 7 * wardrobe.thickness) / 7;

  return (
    <$.Module
      $isInModal={isInModal}
      $standWidth={px * viewport.thickness}
      $height={corpus.height * viewport.px}
    >
      <Shelf isInModal={isInModal} />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf isInModal={isInModal} />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf isInModal={isInModal} />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf isInModal={isInModal} />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf isInModal={isInModal} />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf isInModal={isInModal} />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf isInModal={isInModal} />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
    </$.Module>
  );
};

export default Module5;
