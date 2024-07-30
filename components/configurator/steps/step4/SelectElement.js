import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import { getDrawerPriceDifference } from "@/utils/configurator/steps/step4/drawers/getDrawerFittingsPrice";

import * as $ from "@/styles/configurator/components/steps/step4/SelectElement.styled";

const SelectElement = () => {
  const { state, drawers, setTypeDrawers } = useMainStore((state) => ({
    state: state,
    drawers: state.drawers,
    setTypeDrawers: state.setTypeDrawers,
  }));
  const handleClickDrawer = (type) => {
    if (type === "wooden" || type === "sidewalls") {
      setTypeDrawers({ type });
    }
  };

  const getDrawersPrice = (type) => {
    if (type === "wooden") {
      return `v ceně`;
    } else {
      const price = getDrawerPriceDifference(state);
      return `+${price} Kč`;
    }
  };

  return (
    <>
      <$.Wrap
        $isActive={drawers.type === "wooden"}
        onClick={() => handleClickDrawer("wooden")}
      >
        <$.ImageWrap>
          <Image
            src={"/images/configurator/full-wood-drawer.jpg"}
            width={100}
            height={100}
            objectFit="contain"
          />
          <$.Price>{getDrawersPrice("wooden")}</$.Price>
        </$.ImageWrap>
        <$.TextWrap>
          Celodřevěná zásuvka s tlumením a skrytým výsuvem
        </$.TextWrap>
      </$.Wrap>
      <$.Wrap
        $isActive={drawers.type === "sidewalls"}
        onClick={() => handleClickDrawer("sidewalls")}
      >
        <$.ImageWrap>
          <Image
            src={"/images/configurator/side-panel-drawer.jpg"}
            width={100}
            height={100}
            objectFit="contain"
          />
          <$.Price>{getDrawersPrice("sidewalls")}</$.Price>
        </$.ImageWrap>
        <$.TextWrap>
          Zásuvka s dutými bočnicemi s tlumením a skrytým výsuvem
        </$.TextWrap>
      </$.Wrap>
    </>
  );
};

export default SelectElement;
