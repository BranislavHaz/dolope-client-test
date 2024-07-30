import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/elements/Wardrobe.styled";

import Doors from "@/components/configurator/elements/Doors";
import Corpus from "@/components/configurator/elements/Corpus";
import Rail from "@/components/configurator/elements/Rail";
import Side from "@/components/configurator/elements/Side";

const Wardrobe = () => {
  const { viewportSizes } = useMainStore((state) => ({
    viewportSizes: state.viewportSizes,
  }));

  return (
    <$.Wardrobe
      $width={viewportSizes.wardrobe.width}
      $height={viewportSizes.wardrobe.height}
    >
      <Side location="left" />
      <Doors />
      <Rail type="top" />
      <Corpus />
      <Rail type="bottom" />
      <Side location="right" />
    </$.Wardrobe>
  );
};

export default Wardrobe;
