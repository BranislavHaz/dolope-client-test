import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./hanger.styled";

const Hanger = () => {
  const { moduleWidth, hangerHeight, mm } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    hangerHeight: state.hangerHeight,
    mm: state.mm,
  }));

  return (
    <$.Hanger
      $width={mm * moduleWidth}
      $height={Math.ceil(mm * hangerHeight * 10) / 10}
    />
  );
};

export default Hanger;
