import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";

const Module4 = ({ isInModal = false }) => {
  const { corpus, viewport } = useMainStore((state) => ({
    corpus: state.corpus,
    viewport: state.viewport,
  }));

  const { px } = viewport;
  const spaceSize = (corpus.height - 6 * viewport.thickness) / 6;

  return (
    <$.Module
      $isInModal={isInModal}
      $standWidth={px * viewport.thickness}
      $height={corpus.height * viewport.px}
    >
      <Shelf isInModal={isInModal} />
      <Space height={spaceSize} />
      <Shelf isInModal={isInModal} />
      <Space height={spaceSize} />
      <Shelf isInModal={isInModal} />
      <Space height={spaceSize} />
      <Shelf isInModal={isInModal} />
      <Space height={spaceSize} />
      <Shelf isInModal={isInModal} />
      <Space height={spaceSize} />
      <Shelf isInModal={isInModal} />
      <Space height={spaceSize} />
    </$.Module>
  );
};

export default Module4;
