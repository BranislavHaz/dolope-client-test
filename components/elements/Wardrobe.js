import React, { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Wardrobe.styled";

import Doors from "@/components/elements/Doors";
import Corpus from "@/components/elements/Corpus";
import Rail from "@/components/elements/Rail";
import Side from "@/components/elements/Side";

const Wardrobe = ({ scaleFactor }) => {
  const { wardrobe, sideWalls, viewport, setViewport, sections } = useMainStore(
    (state) => ({
      wardrobe: state.wardrobe,
      sideWalls: state.sideWalls,
      viewport: state.viewport,
      setViewport: state.setViewport,
      sections: state.sections,
    })
  );

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

  const wardrobeWidth =
    sections.count * sections.width +
    (countOfStands + countOfSideWalls) * viewport.thickness;

  return (
    <$.Wardrobe
      $width={px * wardrobeWidth}
      $height={px * wardrobe.height}
      $scaleFactor={scaleFactor}
    >
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
