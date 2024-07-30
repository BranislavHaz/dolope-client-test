import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";

const Module25 = () => {
  const { wardrobe, corpus, viewportSizes } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewportSizes: state.viewportSizes,
  }));

  const spaceSizeDisplay =
    (viewportSizes.corpus.height - 3 * viewportSizes.wardrobe.thicknessDTD) / 2;
  const spaceSizeReal =
    Math.floor(((corpus.height - 3 * wardrobe.thickness) / 2) * 100) / 100;

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal}>
        <Hanger />
      </Space>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal}>
        <Hanger />
      </Space>
      <Shelf />
    </$.Module>
  );
};

export default Module25;
