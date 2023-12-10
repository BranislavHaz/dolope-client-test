import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import { SubmitButton } from "@/styles/components/steps/ui/SubmitButton.styled";

import * as $ from "@/styles/components/steps/step1/SizeWardrobe.styled";

import Title from "../ui/Title";

const SizeWardrobe = () => {
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

  const handleSubmit = () => {
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
      state.setWardrobeWidth(width * 10);
      state.setWardrobeHeight(height * 10);
      state.setWardrobeDepth(depth * 10);
      state.setTopShelfHeight(topSelf * 10);
      state.setIsModalActive(false);
      state.setStepsInputs("step1", "sizeWardrobe", true);
    } else {
      state.setStepsInputs("step1", "sizeWardrobe", false);
    }
  };

  useEffect(() => {
    const { wardrobe, corpus } = state;
    wardrobe.width && setWidth(wardrobe.width / 10);
    wardrobe.height && setHeight(wardrobe.height / 10);
    wardrobe.depth && setDepth(wardrobe.depth / 10);
    corpus.topShelfHeight && setTopSelf(corpus.topShelfHeight / 10);
  }, []);

  return (
    <$.FormWrap>
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
      <SubmitButton onClick={handleSubmit}>Uložit</SubmitButton>
    </$.FormWrap>
  );
};

export default SizeWardrobe;
