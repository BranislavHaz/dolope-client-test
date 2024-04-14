import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/getDecorUrl";

import * as $ from "@/styles/components/elements/Stand.styled";

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
      $width={viewportSizes.thicknessDtd}
      $height={viewportSizes.heightCorpus}
      $bgImg={decorUrl}
    />
  );
};

export default Stand;
