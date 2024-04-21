import { useState } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import Button from "./Button";

import * as $ from "@/styles/components/steps/ui/FilterBoxDecors.styled";

const FilterBoxDecors = ({ type }) => {
  const { decorFilter, setDecorFilter } = useMainStore((state) => ({
    decorFilter: state.decorFilter,
    setDecorFilter: state.setDecorFilter,
  }));

  const [isError, setIsError] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(decorFilter[type].search);
  const [activeManufacturer, setActiveManufacturer] = useState(
    decorFilter[type].manufacturer
  );
  const [activeDecorType, setActiveDecorType] = useState(
    decorFilter[type].decorType
  );

  const handleManufacturer = (e) => {
    const manufacturer = e.target.id;
    setActiveManufacturer(manufacturer);
  };

  const handleDecorType = (e) => {
    const decorType = e.target.id;
    setActiveDecorType(decorType);
  };

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
    setSearchValue(decorFilter[type].search);
    setActiveManufacturer(decorFilter[type].manufacturer);
    setActiveDecorType(decorFilter[type].decorType);
  };

  const handleSubmit = () => {
    if (searchValue && searchValue.length < 3 && searchValue.length > 1) {
      setIsError(true);
    } else {
      setIsError(false);
      setDecorFilter({
        type,
        search: searchValue === "" ? null : searchValue,
        manufacturer: activeManufacturer,
        decorType: activeDecorType,
      });
      toggleContent();
    }
  };

  const handleClose = () => {
    setIsContentOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <$.FilterBoxWrap>
      <$.BoxHeader onClick={toggleContent}>
        <$.IconWrap>
          <Image src={"/icons/filter.svg"} width={25} height={25} />
        </$.IconWrap>
        <$.Title>Filtrace a vyhledávání</$.Title>
      </$.BoxHeader>
      {isContentOpen && (
        <$.BoxContent>
          <$.SearchWrap>
            <$.Search
              placeholder="Vyhledejte název nebo kód dekoru"
              value={searchValue || ""}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              $isError={isError}
            />
            <$.SearchErrorText>
              {isError ? "Minimálně 3 znaky" : ""}
            </$.SearchErrorText>
          </$.SearchWrap>
          <$.SelectBoxWrap>
            <$.SelectoBoxTitle>Výrobce</$.SelectoBoxTitle>
            <$.SelectBoxGroup>
              <$.SelectBox
                id={"All"}
                $isActive={activeManufacturer === "All"}
                onClick={handleManufacturer}
              >
                Všichni
              </$.SelectBox>
              <$.SelectBox
                id={"Egger"}
                $isActive={activeManufacturer === "Egger"}
                onClick={handleManufacturer}
              >
                Egger
              </$.SelectBox>
              <$.SelectBox
                id={"Kronospan"}
                $isActive={activeManufacturer === "Kronospan"}
                onClick={handleManufacturer}
              >
                Kronospan
              </$.SelectBox>
            </$.SelectBoxGroup>
          </$.SelectBoxWrap>
          <$.SelectBoxWrap>
            <$.SelectoBoxTitle>Typ dekoru</$.SelectoBoxTitle>
            <$.SelectBoxGroup>
              <$.SelectBox
                id="all"
                $isActive={activeDecorType === "all"}
                onClick={handleDecorType}
              >
                Všechny
              </$.SelectBox>
              <$.SelectBox
                id="wood"
                $isActive={activeDecorType === "wood"}
                onClick={handleDecorType}
              >
                Dřevo
              </$.SelectBox>
              <$.SelectBox
                id="color"
                $isActive={activeDecorType === "color"}
                onClick={handleDecorType}
              >
                Barva
              </$.SelectBox>
              <$.SelectBox
                id="other"
                $isActive={activeDecorType === "other"}
                onClick={handleDecorType}
              >
                Ostatní
              </$.SelectBox>
            </$.SelectBoxGroup>
          </$.SelectBoxWrap>
          <$.SubmitWrap>
            <Button type={"darkColor"} handleClick={handleSubmit}>
              Filtrovat
            </Button>
            <Button type={"lightColor"} handleClick={handleClose}>
              Zavřít
            </Button>
          </$.SubmitWrap>
        </$.BoxContent>
      )}
    </$.FilterBoxWrap>
  );
};

export default FilterBoxDecors;
