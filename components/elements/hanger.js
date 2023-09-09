import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./hanger.styled";

const Hanger = () => {
  const { sections, hangers, viewport } = useWardrobeStore((state) => ({
    sections: state.sections,
    hangers: state.hangers,
    viewport: state.viewport,
  }));

  const { px } = viewport;

  return (
    <$.Hanger
      $width={px * sections.width}
      $height={Math.ceil(px * hangers.height * 10) / 10}
    />
  );
};

export default Hanger;
