import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/step1/SizeWardrobe.styled";

import Title from "../ui/Title";
import Button from "../ui/Button";

import toast from "react-hot-toast";

const SizeWardrobe = ({ setHandleSubmit }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [depth, setDepth] = useState(0);
  const [topSelf, setTopSelf] = useState(0);
  const [isCorrect, setIsCorrect] = useState({
    width: undefined,
    height: undefined,
    depth: undefined,
    topSelf: undefined,
  });

  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const submitAction = (type) => {
    const newIsCorrect = {
      width: width >= 150 && width <= 560 ? width : false,
      height: height >= 100 && height <= 277 ? height : false,
      depth: depth >= 28 && depth <= 100 ? depth : false,
      topSelf: topSelf >= 15 && topSelf <= 40 ? topSelf : false,
    };

    setIsCorrect(newIsCorrect);

    const allValuesArePositive = Object.values(newIsCorrect).every(
      (value) => value !== false && value !== undefined
    );

    if (allValuesArePositive) {
      state.clearAllValues();
      state.setWardrobeWidth(width * 10);
      state.setWardrobeHeight(height * 10);
      state.setWardrobeDepth(depth * 10);
      state.setTopShelfHeight(topSelf * 10);
      state.setStepsInputs("step1", "sizeWardrobe", true);

      type === "mobile" && state.setIsModalActive(false);
      type === "mobile"
        ? toast.success("Rozměry skříně byly uloženy!", {
            className: "small-device",
          })
        : toast.success("Rozměry skříně byly uloženy!", {
            className: "larger-device",
          });
    } else {
      state.setStepsInputs("step1", "sizeWardrobe", false);
      type === "mobile"
        ? toast.error("Zkontrolujte všechny vyplněné údaje!", {
            className: "small-device",
          })
        : toast.error("Zkontrolujte všechny vyplněné údaje!", {
            className: "larger-device",
          });
    }
  };

  useEffect(() => {
    const { wardrobe, corpus } = state;
    wardrobe.width && setWidth(wardrobe.width / 10);
    wardrobe.height && setHeight(wardrobe.height / 10);
    wardrobe.depth && setDepth(wardrobe.depth / 10);
    corpus.topShelfHeight && setTopSelf(corpus.topShelfHeight / 10);
  }, []);

  useEffect(() => {
    setHandleSubmit(() => () => submitAction("mobile"));
  }, [width, height, depth, topSelf]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      state.viewport.width <= 768 ? submitAction("mobile") : submitAction();
    }
  };

  return (
    <>
      <$.FormWrap onKeyDown={handleKeyDown}>
        <Title>Rozměry skříně</Title>
        <$.InputWrapper $isCorrect={isCorrect.width !== false}>
          <input
            type="number"
            placeholder="Šířka skříně"
            value={width === 0 ? "" : width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.width !== false}>
          Maximální povolené rozmezí: 150-560 cm
        </$.Details>
        <$.InputWrapper $isCorrect={isCorrect.height !== false}>
          <input
            type="number"
            placeholder="Výška skříně"
            value={height === 0 ? "" : height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.height !== false}>
          Maximální povolené rozmezí: 100-277 cm
        </$.Details>
        <$.InputWrapper $isCorrect={isCorrect.depth !== false}>
          <input
            type="number"
            placeholder="Hloubka skříně"
            value={depth === 0 ? "" : depth}
            onChange={(e) => setDepth(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.depth !== false}>
          Maximální povolené rozmezí: 28-100 cm
        </$.Details>
        <$.InputWrapper $isCorrect={isCorrect.topSelf !== false}>
          <input
            type="number"
            placeholder="Výška vrchní police"
            value={topSelf === 0 ? "" : topSelf}
            onChange={(e) => setTopSelf(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.topSelf !== false}>
          Maximální povolené rozmezí: 15-40 cm
        </$.Details>
        <$.SubmitWrap>
          <Button handleClick={submitAction} type={"darkColor"}>
            uložit
          </Button>
        </$.SubmitWrap>
      </$.FormWrap>
    </>
  );
};

export default SizeWardrobe;
