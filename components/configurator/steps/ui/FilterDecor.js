import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import SearchDecors from "./SearchDecors";

import * as $ from "@/styles/configurator/components/steps/ui/FilterDecor.styled";

const FilterDecor = ({ type }) => {
  const { modal, decorFilter, setDecorFilter } = useMainStore((state) => ({
    modal: state.modal,
    decorFilter: state.decorFilter,
    setDecorFilter: state.setDecorFilter,
  }));

  const [showMaterialType, setShowMaterialType] = useState(false);
  const [showDecorType, setShowDecorType] = useState(false);

  useEffect(() => {
    if (modal.type === "decorDoors") {
      setShowMaterialType(true);
    } else {
      setShowMaterialType(false);
    }

    if (
      modal.type === "decorCorpus" ||
      modal.type === "decorSideWalls" ||
      (modal.type === "decorDoors" && decorFilter.doors.materialType === "wood")
    ) {
      setShowDecorType(true);
    } else {
      setShowDecorType(false);
    }
  }, [modal.type, decorFilter.doors.materialType]);

  const handleClickMaterialType = (e) => {
    setDecorFilter({
      type,
      search: null,
      materialType: e.target.id,
    });
  };

  const handleClickDecorType = (e) => {
    setDecorFilter({
      type,
      search: null,
      decorType: e.target.id,
    });
  };

  return (
    <$.Wrap>
      <SearchDecors type={type} />
      {showMaterialType && (
        <$.TypeWrap>
          <$.Button
            id="wood"
            onClick={handleClickMaterialType}
            $isActive={decorFilter.doors.materialType === "wood"}
          >
            Dřevotříska
          </$.Button>
          <$.Button
            id="mirror"
            onClick={handleClickMaterialType}
            $isActive={decorFilter.doors.materialType === "mirror"}
          >
            Zrcadla
          </$.Button>
          <$.Button
            id="glass"
            onClick={handleClickMaterialType}
            $isActive={decorFilter.doors.materialType === "glass"}
          >
            Skla
          </$.Button>
        </$.TypeWrap>
      )}
      {showDecorType && (
        <$.TypeWrap>
          <$.Button
            id="all"
            onClick={handleClickDecorType}
            $isActive={decorFilter[type].decorType === "all"}
          >
            Všechny
          </$.Button>
          <$.Button
            id="wood"
            onClick={handleClickDecorType}
            $isActive={decorFilter[type].decorType === "wood"}
          >
            Dřevo
          </$.Button>
          <$.Button
            id="color"
            onClick={handleClickDecorType}
            $isActive={decorFilter[type].decorType === "color"}
          >
            Barva
          </$.Button>
          <$.Button
            id="other"
            onClick={handleClickDecorType}
            $isActive={decorFilter[type].decorType === "other"}
          >
            Ostatní
          </$.Button>
        </$.TypeWrap>
      )}
    </$.Wrap>
  );
};

export default FilterDecor;
