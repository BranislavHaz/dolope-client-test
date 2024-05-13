import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Wardrobe.styled";

import Doors from "@/components/elements/Doors";
import Corpus from "@/components/elements/Corpus";
import Rail from "@/components/elements/Rail";
import Side from "@/components/elements/Side";

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
