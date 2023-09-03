import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./stand.styled";

const Stand = () => {
  const { thickness, moduleHeight, mm } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleHeight: state.moduleHeight,
    mm: state.mm,
  }));

  return <$.Stand $width={mm * thickness} $height={mm * moduleHeight} />;
};

export default Stand;
