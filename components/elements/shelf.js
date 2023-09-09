import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./shelf.styled";

const Shelf = () => {
  const { thickness, moduleWidth, px } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleWidth: state.moduleWidth,
    px: state.px,
  }));

  return <$.Shelf $width={px * moduleWidth} $height={px * thickness} />;
};

export default Shelf;
