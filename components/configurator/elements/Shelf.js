import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/configurator/getDecorUrl";

import * as $ from "@/styles/configurator/components/elements/Shelf.styled";

const Shelf = () => {
  const { state, viewportSizes } = useMainStore((state) => ({
    state: state,
    viewportSizes: state.viewportSizes,
  }));

  const decorUrl = getDecorUrl({ state, type: "corpus" });

  return (
    <$.Shelf
      $width={viewportSizes.section.width}
      $height={viewportSizes.wardrobe.thicknessDTD}
      $bgImg={decorUrl}
    />
  );
};

export default Shelf;
