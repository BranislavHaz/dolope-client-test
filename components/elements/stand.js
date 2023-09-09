import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./stand.styled";

const Stand = () => {
  const { thickness, moduleHeight, px } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleHeight: state.moduleHeight,
    px: state.px,
  }));

  return <$.Stand $width={px * thickness} $height={px * moduleHeight} />;
};

export default Stand;
