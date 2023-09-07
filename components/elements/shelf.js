import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./shelf.styled";

const Shelf = () => {
  const { thickness, moduleWidth, mm } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleWidth: state.moduleWidth,
    mm: state.mm,
  }));

  return <$.Shelf $width={mm * moduleWidth} $height={mm * thickness} />;
};

export default Shelf;
