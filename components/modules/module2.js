import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./module2.styles";

const Module2 = () => {
  const { thickness, moduleWidth, moduleHeight, mm } = useWardrobeStore(
    (state) => ({
      thickness: state.thickness,
      moduleWidth: state.moduleWidth,
      moduleHeight: state.moduleHeight,
      mm: state.mm,
    })
  );

  const spaceSize = (moduleHeight - 6 * thickness) / 6;

  return (
    <$.Module2
      $width={mm * moduleWidth}
      $height={mm * moduleHeight}
      $thickness={mm * thickness}
      $spaceSize={mm * spaceSize}
    >
      <$.Shelf />
      <$.Space>
        {Math.floor(moduleWidth)} x {Math.floor(spaceSize)} mm
      </$.Space>
      <$.Shelf />
      <$.Space>
        {Math.floor(moduleWidth)} x {Math.floor(spaceSize)} mm
      </$.Space>
      <$.Shelf />
      <$.Space>
        {Math.floor(moduleWidth)} x {Math.floor(spaceSize)} mm
      </$.Space>
      <$.Shelf />
      <$.Space>
        {Math.floor(moduleWidth)} x {Math.floor(spaceSize)} mm
      </$.Space>
      <$.Shelf />
      <$.Space>
        {Math.floor(moduleWidth)} x {Math.floor(spaceSize)} mm
      </$.Space>
      <$.Shelf />
      <$.Space>
        {Math.floor(moduleWidth)} x {Math.floor(spaceSize)} mm
      </$.Space>
    </$.Module2>
  );
};

export default Module2;
