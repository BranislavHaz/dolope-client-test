import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./hanger.styled";

const Hanger = () => {
  const { moduleWidth, hanger, px } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    hanger: state.hanger,
    px: state.px,
  }));

  return (
    <$.Hanger
      $width={px * moduleWidth}
      $height={Math.ceil(px * hanger.height * 10) / 10}
    />
  );
};

export default Hanger;
