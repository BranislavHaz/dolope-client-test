import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/configurator/getDecorUrl";

import * as $ from "@/styles/configurator/components/elements/Stand.styled";

const Stand = () => {
  const { state, corpus, viewport, viewportSizes } = useMainStore((state) => ({
    state: state,
    corpus: state.corpus,
    viewport: state.viewport,
    viewportSizes: state.viewportSizes,
  }));

  const { px } = viewport;
  const decorUrl = getDecorUrl({ state, type: "corpus" });

  const width = viewport.thickness * px >= 2 ? viewport.thickness * px : 2;

  return (
    <$.Stand
      $width={viewportSizes.wardrobe.thicknessDTD}
      $height={viewportSizes.corpus.height}
      $bgImg={decorUrl}
    />
  );
};

export default Stand;
