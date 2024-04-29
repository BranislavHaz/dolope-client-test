import React, { useEffect } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/step1/TypeWardrobe.styled";

import Title from "../ui/Title";

import toast from "react-hot-toast";

const TypeWardrobe = ({ setHandleSubmit }) => {
  const { wardrobe, setWardrobeType, setStepsInputs, setIsModalActive } =
    useMainStore((state) => ({
      wardrobe: state.wardrobe,
      setWardrobeType: state.setWardrobeType,
      setStepsInputs: state.setStepsInputs,
      setIsModalActive: state.setIsModalActive,
    }));

  const handleSubmit = () => {
    if (wardrobe.type) {
      setIsModalActive(false);
      toast.success("Typ skříně byl uložen!", { className: "toast-mobile" });
    } else {
      toast.error("Vyberte typ skříně!", { className: "toast-mobile" });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [wardrobe.type]);

  const handleClick = (e) => {
    setWardrobeType(Number(e.currentTarget.id));
    setStepsInputs("step1", "typeWardrobe", true);
    toast.success("Typ skříně byl uložen!", { className: "toast-tablet" });
  };

  return (
    <$.FullWrap>
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
