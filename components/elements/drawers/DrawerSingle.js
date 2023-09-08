import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./DrawerSingle.styled";

const DrawerSingle = () => {
  const { moduleWidth, mm, drawers } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    mm: state.mm,
    drawers: state.drawers,
  }));

  const frontWidthReal =
    moduleWidth - 2 * drawers.grooveWidth - 2 * drawers.frontGap;
  const frontWidth = moduleWidth - 2 * drawers.grooveWidth;

  return (
    <$.DrawerSingle
      $thicknessDTD={mm * drawers.thickness}
      $frontWidth={mm * frontWidth}
      $frontHeight={mm * drawers.frontHeight}
      $grooveWidth={mm * drawers.grooveWidth}
      $gripGap={mm * drawers.gripGap}
    >
      {/* Prvý row */}
      <$.DrawerSideLeft />
      <$.DrawerTop />
      <$.DrawerSideRight />
      {/* Druhý row */}
      <$.DrawerSideLeft />
      <$.DrawerGripGap />
      <$.DrawerSideRight />
      {/* Tretí row */}
      <$.DrawerSideLeft />
      <$.DrawerFront />
      <$.DrawerSideRight />
      {/* Štvrtý row */}
      <$.DrawerSideLeft />
      <$.DrawerBottom />
      <$.DrawerSideRight />
    </$.DrawerSingle>
  );
};

export default DrawerSingle;
