import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Shelf.styled";

const Shelf = ({ isInModal }) => {
  const { sections, viewport } = useMainStore((state) => ({
    sections: state.sections,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return (
    <$.Shelf
      $width={px * sections.width}
      $height={px * viewport.thickness}
      $isInModal={isInModal}
    />
  );
};

export default Shelf;
