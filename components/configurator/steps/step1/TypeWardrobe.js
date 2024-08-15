import React, { useEffect } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/steps/step1/TypeWardrobe.styled";

import Title from "../ui/Title";

import toast from "react-hot-toast";

const TypeWardrobe = ({ setHandleSubmit, translations: t }) => {
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
      toast.success(t.toast.success, {
        className: "small-device",
      });
    } else {
      toast.error(t.toast.error, { className: "small-device" });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [wardrobe.type]);

  const handleClick = (e) => {
    setWardrobeType(Number(e.currentTarget.id));
    setStepsInputs("step1", "typeWardrobe", true);
    toast.success(t.toast.success, { className: "larger-device" });
  };

  return (
    <$.FullWrap>
      <$.Wrap>
        <Title>{t.title}</Title>
        <$.TypesWrap>
          <$.TypeImage
            id={1}
            onClick={handleClick}
            $isActive={wardrobe.type === 1}
          >
            <$.Subtitle>{t.content.between_walls.title}</$.Subtitle>
            <Image
              src={"/images/mezi-stenami.svg"}
              width={250}
              height={175}
              alt={t.content.between_walls.alt_img}
            />
          </$.TypeImage>
          <$.TypeImage
            id={4}
            onClick={handleClick}
            $isActive={wardrobe.type === 4}
          >
            <$.Subtitle>{t.content.in_space.title}</$.Subtitle>
            <Image
              src={"/images/v-prostoru.svg"}
              width={250}
              height={175}
              alt={t.content.in_space.alt_img}
            />
          </$.TypeImage>
          <$.TypeImage
            id={2}
            onClick={handleClick}
            $isActive={wardrobe.type === 2}
          >
            <$.Subtitle>{t.content.left_wall.title}</$.Subtitle>
            <Image
              src={"/images/stena-vlevo.svg"}
              width={250}
              height={175}
              alt={t.content.left_wall.alt_img}
            />
          </$.TypeImage>
          <$.TypeImage
            id={3}
            onClick={handleClick}
            $isActive={wardrobe.type === 3}
          >
            <$.Subtitle>{t.content.right_wall.title}</$.Subtitle>
            <Image
              src={"/images/stena-vpravo.svg"}
              width={250}
              height={175}
              alt={t.content.right_wall.alt_img}
            />
          </$.TypeImage>
        </$.TypesWrap>
      </$.Wrap>
    </$.FullWrap>
  );
};

export default TypeWardrobe;
