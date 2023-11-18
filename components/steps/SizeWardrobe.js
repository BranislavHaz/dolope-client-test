import { useState } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/SizeWardrobe.styled";

import Title from "./ui/Title";

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

  const {
    setWardrobeWidth,
    setWardrobeHeight,
    setWardrobeDepth,
    setTopShelfHeight,
    setIsModalActive,
    setStatusInputs,
  } = useMainStore((state) => ({
    setWardrobeWidth: state.setWardrobeWidth,
    setWardrobeHeight: state.setWardrobeHeight,
    setWardrobeDepth: state.setWardrobeDepth,
    setTopShelfHeight: state.setTopShelfHeight,
    setIsModalActive: state.setIsModalActive,
    setStatusInputs: state.setStatusInputs,
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
      setWardrobeWidth(width * 10);
      setWardrobeHeight(height * 10);
      setWardrobeDepth(depth * 10);
      setTopShelfHeight(topSelf * 10);
      setIsModalActive(false);
      setStatusInputs("sizeWardrobe", true);
    } else {
      setStatusInputs("sizeWardrobe", false);
    }
  };

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
      <$.Submit onClick={handleSubmit}>Uložit</$.Submit>
    </$.FormWrap>
  );
};

export default SizeWardrobe;
