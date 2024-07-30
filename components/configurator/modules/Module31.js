import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";

const Module31 = ({ variableHeightDisplay, variableHeightReal }) => {
  const { wardrobe, corpus, viewportSizes } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewportSizes: state.viewportSizes,
  }));

  const spaceSizeDisplay =
    viewportSizes.corpus.height -
    3 * viewportSizes.wardrobe.thicknessDTD -
    variableHeightDisplay;
  const spaceSizeReal = Math.floor(
    corpus.height - 3 * wardrobe.thickness - variableHeightReal
  );

  return (
    <$.Module>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal} />
      <Shelf />
      <Space
        heightDisplay={variableHeightDisplay}
        heightReal={variableHeightReal}
      >
        <Hanger />
      </Space>
      <Shelf />
    </$.Module>
  );
};

export default Module31;
