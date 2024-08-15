import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/steps/step1/SizeWardrobe.styled";

import Title from "../ui/Title";
import Button from "../ui/Button";

import toast from "react-hot-toast";

const SizeWardrobe = ({ setHandleSubmit, translations: t }) => {
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
        ? toast.success(t.toast.success, {
            className: "small-device",
          })
        : toast.success(t.toast.success, {
            className: "larger-device",
          });
    } else {
      state.setStepsInputs("step1", "sizeWardrobe", false);
      type === "mobile"
        ? toast.error(t.toast.error, {
            className: "small-device",
          })
        : toast.error(t.toast.error, {
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
        <Title>{t.title}</Title>
        <$.InputWrapper $isCorrect={isCorrect.width !== false}>
          <input
            type="number"
            placeholder={t.content.width.placeholder}
            value={width === 0 ? "" : width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.width !== false}>
          {t.content.width.description}
        </$.Details>
        <$.InputWrapper $isCorrect={isCorrect.height !== false}>
          <input
            type="number"
            placeholder={t.content.height.placeholder}
            value={height === 0 ? "" : height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.height !== false}>
          {t.content.height.description}
        </$.Details>
        <$.InputWrapper $isCorrect={isCorrect.depth !== false}>
          <input
            type="number"
            placeholder={t.content.depth.placeholder}
            value={depth === 0 ? "" : depth}
            onChange={(e) => setDepth(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.depth !== false}>
          {t.content.depth.description}
        </$.Details>
        <$.InputWrapper $isCorrect={isCorrect.topSelf !== false}>
          <input
            type="number"
            placeholder={t.content.top_self.placeholder}
            value={topSelf === 0 ? "" : topSelf}
            onChange={(e) => setTopSelf(e.target.value)}
          />
        </$.InputWrapper>
        <$.Details $isCorrect={isCorrect.topSelf !== false}>
          {t.content.top_self.description}
        </$.Details>
        <$.SubmitWrap>
          <Button handleClick={submitAction} type={"darkColor"}>
            Uložit
          </Button>
        </$.SubmitWrap>
      </$.FormWrap>
    </>
  );
};

export default SizeWardrobe;
