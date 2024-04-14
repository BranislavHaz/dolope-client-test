import React, { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Wardrobe.styled";

import Doors from "@/components/elements/Doors";
import Corpus from "@/components/elements/Corpus";
import Rail from "@/components/elements/Rail";
import Side from "@/components/elements/Side";

const Wardrobe = () => {
  const {
    wardrobe,
    sideWalls,
    viewport,
    viewportSizes,
    setViewport,
    sections,
  } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    sideWalls: state.sideWalls,
    viewport: state.viewport,
    viewportSizes: state.viewportSizes,
    setViewport: state.setViewport,
    sections: state.sections,
  }));

  useEffect(() => {
    setViewport(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      [setViewport]
    );

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { px } = viewport;
  const countOfStands = sections.count + 1;
  const countOfSideWalls = sideWalls?.cover?.count || 0;

  /*  const wardrobeWidth =
    sections.count * sections.width +
    (countOfStands + countOfSideWalls) * viewport.thickness; */

  const wardrobeWidth =
    sections.count * sections.width * px +
    (viewport.thickness * px >= 2
      ? (countOfStands + countOfSideWalls) * viewport.thickness * px
      : (countOfStands + countOfSideWalls) * 2);

  return (
    <$.Wardrobe
      $width={viewportSizes.widthWardrobe}
      $height={viewportSizes.heightWardrobe}
    >
      {/* <$.Wardrobe $width={px * wardrobeWidth} $height={px * wardrobe.height}> */}
      <Side location="left" />
      <Doors />
      <Rail type="top" />
      <Corpus />
      <Rail type="bottom" />
      <Side location="right" />
    </$.Wardrobe>
  );
};

export default Wardrobe;
