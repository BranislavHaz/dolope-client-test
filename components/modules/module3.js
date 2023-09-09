import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";
import Hanger from "../elements/hanger";

const Module3 = () => {
  const { thickness, sections, hangers } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    sections: state.sections,
    hangers: state.hangers,
  }));

  const spaceSize1 = 300;
  const spaceSize2 = hangers.topSpace;
  const spaceSize3 =
    sections.height - 3 * thickness - spaceSize1 - spaceSize2 - hangers.height;

  return (
    <$.Module>
      <Shelf />
      <Space height={spaceSize1} />
      <Shelf />
      <Space height={spaceSize2} isVisible={false} />
      <Hanger />
      <Space height={spaceSize3} />
      <Shelf />
    </$.Module>
  );
};

export default Module3;
