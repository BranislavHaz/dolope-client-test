import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/getDecorUrl";

import * as $ from "@/styles/components/elements/Side.styled";

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
      $width={viewportSizes.thicknessDtd}
      $height={viewportSizes.heightWardrobe}
      $location={location}
      $bgImg={decorUrl}
    />
  );
};

export default Side;
