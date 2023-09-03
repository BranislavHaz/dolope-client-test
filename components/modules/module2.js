import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./module2.styled";

import Shelf from "./shelf";
import Space from "./space";

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
    <$.Module2>
      <Shelf width={mm * moduleWidth} height={mm * thickness} />
      <Space
        width={mm * moduleWidth}
        height={mm * spaceSize}
        size={{ width: moduleWidth, height: spaceSize }}
      />
      <Shelf width={mm * moduleWidth} height={mm * thickness} />
      <Space
        width={mm * moduleWidth}
        height={mm * spaceSize}
        size={{ width: moduleWidth, height: spaceSize }}
      />
      <Shelf width={mm * moduleWidth} height={mm * thickness} />
      <Space
        width={mm * moduleWidth}
        height={mm * spaceSize}
        size={{ width: moduleWidth, height: spaceSize }}
      />
      <Shelf width={mm * moduleWidth} height={mm * thickness} />
      <Space
        width={mm * moduleWidth}
        height={mm * spaceSize}
        size={{ width: moduleWidth, height: spaceSize }}
      />
      <Shelf width={mm * moduleWidth} height={mm * thickness} />
      <Space
        width={mm * moduleWidth}
        height={mm * spaceSize}
        size={{ width: moduleWidth, height: spaceSize }}
      />
      <Shelf width={mm * moduleWidth} height={mm * thickness} />
      <Space
        width={mm * moduleWidth}
        height={mm * spaceSize}
        size={{ width: moduleWidth, height: spaceSize }}
      />
    </$.Module2>
  );
};

export default Module2;
