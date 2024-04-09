import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/getDecorUrl";

import * as $ from "@/styles/components/elements/Stand.styled";

const Stand = ({ location }) => {
  const { state, corpus, viewport } = useMainStore((state) => ({
    state: state,
    corpus: state.corpus,
    viewport: state.viewport,
  }));

  const { px } = viewport;
  const decorUrl = getDecorUrl({ state, type: "corpus" });

  return (
    <$.Stand
      $width={px * viewport.thickness}
      $height={px * corpus.height}
      $location={location}
      $bgImg={decorUrl}
    />
  );
};

export default Stand;
