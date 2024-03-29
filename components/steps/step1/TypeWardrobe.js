import React from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/step1/TypeWardrobe.styled";

import SubmitButton from "../ui/SubmitButton";
import Title from "../ui/Title";

const TypeWardrobe = () => {
  const {
    wardrobe,
    setWardrobeType,
    setIsModalActive,
    stepsInputs,
    setStepsInputs,
  } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    setWardrobeType: state.setWardrobeType,
    setIsModalActive: state.setIsModalActive,
    stepsInputs: state.stepsInputs,
    setStepsInputs: state.setStepsInputs,
  }));

  const handleClick = (idType) => () => {
    setWardrobeType(idType);
    setStepsInputs("step1", "typeWardrobe", true);
  };

  const handleSubmit = () => {
    setIsModalActive(false);
  };

  return (
    <$.FullWrap>
      <$.Wrap>
        <Title>Typ skříně</Title>
        <$.TypesWrap>
          <$.TypeImage onClick={handleClick(1)} $isActive={wardrobe.type === 1}>
            <$.Subtitle>Mezi stěnami</$.Subtitle>
            <Image
              src={"/images/mezi-stenami.svg"}
              width={250}
              height={175}
              alt={"Mezi stěnami"}
            />
          </$.TypeImage>
          <$.TypeImage onClick={handleClick(4)} $isActive={wardrobe.type === 4}>
            <$.Subtitle>V prostoru</$.Subtitle>
            <Image
              src={"/images/v-prostoru.svg"}
              width={250}
              height={175}
              alt={"V prostoru"}
            />
          </$.TypeImage>
          <$.TypeImage onClick={handleClick(2)} $isActive={wardrobe.type === 2}>
            <$.Subtitle>Stěna vlevo</$.Subtitle>
            <Image
              src={"/images/stena-vlevo.svg"}
              width={250}
              height={175}
              alt={"Stena vlevo"}
            />
          </$.TypeImage>
          <$.TypeImage onClick={handleClick(3)} $isActive={wardrobe.type === 3}>
            <$.Subtitle>Stěna vpravo</$.Subtitle>
            <Image
              src={"/images/stena-vpravo.svg"}
              width={250}
              height={175}
              alt={"Stěna vpravo"}
            />
          </$.TypeImage>
        </$.TypesWrap>
      </$.Wrap>
      <SubmitButton
        isVisible={stepsInputs.step1.typeWardrobe}
        submitAction={handleSubmit}
      />
    </$.FullWrap>
  );
};

export default TypeWardrobe;
