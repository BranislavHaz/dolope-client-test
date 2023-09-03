import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./module1.styled";

import Shelf from "./shelf";
import Space from "./space";

const Module1 = () => {
  const { thickness, moduleWidth, moduleHeight, mm } = useWardrobeStore(
    (state) => ({
      thickness: state.thickness,
      moduleWidth: state.moduleWidth,
      moduleHeight: state.moduleHeight,
      mm: state.mm,
    })
  );

  const spaceSize = (moduleHeight - 5 * thickness) / 5;

  return (
    <$.Module1>
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
    </$.Module1>
  );
};

export default Module1;
