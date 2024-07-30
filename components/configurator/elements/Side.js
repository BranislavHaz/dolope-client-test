import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/configurator/getDecorUrl";

import * as $ from "@/styles/configurator/components/elements/Side.styled";

const Side = ({ location }) => {
  const { state, wardrobe, viewport, viewportSizes } = useMainStore(
    (state) => ({
      state: state,
      wardrobe: state.wardrobe,
      viewport: state.viewport,
      viewportSizes: state.viewportSizes,
    })
  );

  const { px } = viewport;
  const decorUrl = getDecorUrl({ state, type: "sideWalls" });

  return (
    <$.Side
      $width={viewportSizes.wardrobe.thicknessDTD}
      $height={viewportSizes.wardrobe.height}
      $location={location}
      $bgImg={decorUrl}
    />
  );
};

export default Side;
