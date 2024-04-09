import useMainStore from "@/stores/useMainStore";
import { getDecorUrl } from "@/utils/getDecorUrl";

import * as $ from "@/styles/components/elements/Shelf.styled";

const Shelf = ({ isInModal }) => {
  const { state, sections, viewport } = useMainStore((state) => ({
    state: state,
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;
  const decorUrl = getDecorUrl({ state, type: "corpus" });

  return (
    <$.Shelf
      $width={px * sections.width}
      $height={px * viewport.thickness}
      $isInModal={isInModal}
      $bgImg={decorUrl}
    />
  );
};

export default Shelf;
