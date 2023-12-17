import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/modules/modal/Module.styled";

const DrawersModal = ({ countDrawers }) => {
  const { viewport } = useMainStore((state) => ({
    viewport: state.viewport,
    drawers: state.drawers,
  }));

  const getDrawers = () => {
    const sectionHeight = viewport.height * 0.3; // 30vh má SectionType v TypeSections.styled
    const drawerHeight = sectionHeight / 10;
    const drawersArr = [];

    for (let i = 1; i <= countDrawers; i++) {
      drawersArr.push(<$.Drawer key={i} $height={drawerHeight} />);
    }

    return drawersArr;
  };

  return <$.Drawers>{getDrawers()}</$.Drawers>;
};

export default DrawersModal;
