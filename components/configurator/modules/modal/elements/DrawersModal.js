import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/modules/modal/Module.styled";

const DrawersModal = ({ countDrawers }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const getDrawers = () => {
    const sectionHeight = state.viewportSizes.modal.elHeight;
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
