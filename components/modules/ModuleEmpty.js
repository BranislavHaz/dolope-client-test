import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./ModuleEmpty.styled";

const ModuleEmpty = () => {
  const { moduleWidth, mm } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    mm: state.mm,
  }));

  return <$.ModuleEmpty $width={mm * moduleWidth} />;
};

export default ModuleEmpty;
