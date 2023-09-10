import React from "react";
import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Wardrobe.styled";

import Corpus from "@/components/elements/Corpus";
import Rail from "@/components/elements/Rail";
import Side from "@/components/elements/Side";

const Wardrobe = () => {
  const { sections, wardrobe, viewport } = useWardrobeStore((state) => ({
    wardrobe: state.wardrobe,
    viewport: state.viewport,
    sections: state.sections,
  }));
  const { px } = viewport;

  const countOfStands = sections.count + 1;
  const countOfSideWalls = wardrobe.sideWallsCover.count;

  const wardrobeWidth =
    sections.count * sections.width +
    (countOfStands + countOfSideWalls) * viewport.thickness;

  return (
    <$.Wardrobe $width={px * wardrobeWidth} $height={px * wardrobe.height}>
      <Side location="left" />
      <Rail type="top" />
      <Corpus />
      <Rail type="bottom" />
      <Side location="right" />
    </$.Wardrobe>
  );
};

export default Wardrobe;
