import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import { getDrawerPriceDifference } from "@/utils/configurator/steps/step4/drawers/getDrawerFittingsPrice";

import * as $ from "@/styles/configurator/components/steps/step4/SelectElement.styled";

const SelectElement = ({ translations: t }) => {
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
      return `${t.price_included}`;
    } else {
      const price = getDrawerPriceDifference(state);
      return `+${price} ${t.currency}`;
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
            alt={t.full_wood.alt_img}
            width={100}
            height={100}
            objectFit="contain"
          />
          <$.Price>{getDrawersPrice("wooden")}</$.Price>
        </$.ImageWrap>
        <$.TextWrap>{t.full_wood.title}</$.TextWrap>
      </$.Wrap>
      <$.Wrap
        $isActive={drawers.type === "sidewalls"}
        onClick={() => handleClickDrawer("sidewalls")}
      >
        <$.ImageWrap>
          <Image
            src={"/images/configurator/side-panel-drawer.jpg"}
            alt={t.plastic_side_walls.alt_img}
            width={100}
            height={100}
            objectFit="contain"
          />
          <$.Price>{getDrawersPrice("sidewalls")}</$.Price>
        </$.ImageWrap>
        <$.TextWrap>{t.plastic_side_walls.title}</$.TextWrap>
      </$.Wrap>
    </>
  );
};

export default SelectElement;
