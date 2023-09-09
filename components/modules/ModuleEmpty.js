import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./ModuleEmpty.styled";

const ModuleEmpty = () => {
  const { moduleWidth, px } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    px: state.px,
  }));

  return <$.ModuleEmpty $width={px * moduleWidth} />;
};

export default ModuleEmpty;
