import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./DrawerSingle.styled";

const DrawerSingle = () => {
  const { moduleWidth, hangerHeight, mm, drawers } = useWardrobeStore(
    (state) => ({
      moduleWidth: state.moduleWidth,
      hangerHeight: state.hangerHeight,
      mm: state.mm,
      drawers: state.drawers,
    })
  );

  const frontWidth =
    moduleWidth - 2 * drawers.grooveWidth - 2 * drawers.frontGap;

  return (
    <$.DrawerSingle
      $thicknessDTD={mm * drawers.thickness}
      $frontWidth={mm * frontWidth}
      $frontHeight={mm * drawers.frontHeight}
      $grooveWidth={mm * drawers.grooveWidth}
      $frontGap={mm * drawers.frontGap}
      $gripGap={mm * drawers.gripGap}
    >
      {/* Prvý row */}
      <$.DrawerSide />
      <$.DrawerTop />
      <$.DrawerTop />
      <$.DrawerTop />
      <$.DrawerSide />
      {/* Druhý row */}
      <$.DrawerSide />
      <$.DrawerFrontGap />
      <$.DrawerGripGap />
      <$.DrawerFrontGap />
      <$.DrawerSide />
      {/* Tretí row */}
      <$.DrawerSide />
      <$.DrawerFrontGap />
      <$.DrawerFront />
      <$.DrawerFrontGap />
      <$.DrawerSide />
      {/* Štvrtý row */}
      <$.DrawerSide />
      <$.DrawerFrontGap />
      <$.DrawerFrontGap />
      <$.DrawerFrontGap />
      <$.DrawerSide />
      {/* Piatý row */}
      <$.DrawerSide />
      <$.DrawerBottom />
      <$.DrawerBottom />
      <$.DrawerBottom />
      <$.DrawerSide />
    </$.DrawerSingle>
  );
};

export default DrawerSingle;
