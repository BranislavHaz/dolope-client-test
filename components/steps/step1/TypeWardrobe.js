import React, { useEffect } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/step1/TypeWardrobe.styled";

import FlashMessage from "../ui/FlashMessage";
import Title from "../ui/Title";

const TypeWardrobe = ({ setHandleSubmit }) => {
  const {
    wardrobe,
    setWardrobeType,
    setStepsInputs,
    setIsModalActive,
    setFlashMessage,
  } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    setWardrobeType: state.setWardrobeType,
    setStepsInputs: state.setStepsInputs,
    setIsModalActive: state.setIsModalActive,
    setFlashMessage: state.setFlashMessage,
  }));

  const handleSubmit = () => {
    if (wardrobe.type) {
      setIsModalActive(false);
      setFlashMessage({ type: "error", value: false });
    } else {
      setFlashMessage({ type: "error", value: true });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [wardrobe.type]);

  const handleClick = (e) => {
    setWardrobeType(Number(e.currentTarget.id));
    setStepsInputs("step1", "typeWardrobe", true);
  };

  return (
    <$.FullWrap>
      <FlashMessage type={"error"}>Prosím vyberte si typ skříně.</FlashMessage>
      <$.Wrap>
        <Title>Typ skříně</Title>
        <$.TypesWrap>
          <$.TypeImage
            id={1}
            onClick={handleClick}
            $isActive={wardrobe.type === 1}
          >
            <$.Subtitle>Mezi stěnami</$.Subtitle>
            <Image
              src={"/images/mezi-stenami.svg"}
              width={250}
              height={175}
              alt={"Mezi stěnami"}
            />
          </$.TypeImage>
          <$.TypeImage
            id={4}
            onClick={handleClick}
            $isActive={wardrobe.type === 4}
          >
            <$.Subtitle>V prostoru</$.Subtitle>
            <Image
              src={"/images/v-prostoru.svg"}
              width={250}
              height={175}
              alt={"V prostoru"}
            />
          </$.TypeImage>
          <$.TypeImage
            id={2}
            onClick={handleClick}
            $isActive={wardrobe.type === 2}
          >
            <$.Subtitle>Stěna vlevo</$.Subtitle>
            <Image
              src={"/images/stena-vlevo.svg"}
              width={250}
              height={175}
              alt={"Stena vlevo"}
            />
          </$.TypeImage>
          <$.TypeImage
            id={3}
            onClick={handleClick}
            $isActive={wardrobe.type === 3}
          >
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
    </$.FullWrap>
  );
};

export default TypeWardrobe;
