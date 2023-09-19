import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Stand.styled";

const Stand = ({ location }) => {
  const { corpus, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return (
    <$.Stand
      $width={px * viewport.thickness}
      $height={px * corpus.height}
      $location={location}
    />
  );
};

export default Stand;
