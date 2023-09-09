import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Drawers.styled";

const Drawers = ({ numOfDrawers }) => {
  const { moduleWidth, px, drawer } = useWardrobeStore((state) => ({
    moduleWidth: state.moduleWidth,
    px: state.px,
    drawer: state.drawer,
  }));

  const frontWidthReal =
    moduleWidth - 2 * drawer.grooveWidth - 2 * drawer.frontGap;
  const frontWidth = moduleWidth - 2 * drawer.grooveWidth;

  const getDrawerComponents = () => (
    <>
      <$.DrawerSideLeft />
      <$.DrawerGripGap />
      <$.DrawerSideRight />
      <$.DrawerSideLeft />
      <$.DrawerFront />
      <$.DrawerSideRight />
    </>
  );

  const drawersStyledMap = {
    1: $.Drawers1,
    2: $.Drawers2,
    3: $.Drawers3,
    4: $.Drawers4,
  };

  const getDrawers = (numOfDrawers) => {
    const drawersArray = [];

    for (let i = 1; i <= numOfDrawers; i++) {
      drawersArray.push(getDrawerComponents());
    }

    const DrawerContainer = drawersStyledMap[numOfDrawers];
    return (
      <DrawerContainer
        $thicknessDTD={px * drawer.thickness}
        $frontWidth={px * frontWidth}
        $frontHeight={px * drawer.frontHeight}
        $grooveWidth={px * drawer.grooveWidth}
        $gripGap={px * drawer.gripGap}
      >
        <$.DrawerSideLeft />
        <$.DrawerTop />
        <$.DrawerSideRight />
        {drawersArray}
        <$.DrawerSideLeft />
        <$.DrawerBottom />
        <$.DrawerSideRight />
      </DrawerContainer>
    );
  };

  return <>{getDrawers(numOfDrawers)}</>;
};

export default Drawers;
