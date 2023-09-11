import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "@/styles/components/elements/Stand.styled";

const Stand = ({ location }) => {
  const { wardrobe, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    viewport: state.viewport,
  }));

  //const { px } = viewport;

  return (
    <$.Stand
      $width={viewport.px * viewport.thickness}
      $height={viewport.px * wardrobe.corpus.height}
      $location={location}
    />
  );
};

export default Stand;
