import useMainStore from "@/stores/useMainStore";
import Title from "./ui/Title";
import SelectBox from "./ui/SelectBox";

import { isBasicDataFilled } from "@/utils/steps/step1/isBasicDataFilled";

const getSizeWardrobeText = (wardrobe, corpus, stepsInputs) => {
  const { width, height, depth } = wardrobe;
  const { topShelfHeight } = corpus;
  const { sizeWardrobe } = stepsInputs;

  if ((width || height || depth || topShelfHeight !== 0) && sizeWardrobe) {
    const text = `${width / 10}x${height / 10}x${depth / 10} | ${
      topShelfHeight / 10
    }`;
    return text;
  } else {
    return false;
  }
};

const getTypeWardrobeText = (wardrobe) => {
  const { type } = wardrobe;
  const typeText = {
    1: "Mezi stěnami",
    2: "Stěna vlevo",
    3: "Stěna vpravo",
    4: "V prostoru",
  };

  if (type !== 0) {
    return typeText[type];
  } else {
    return false;
  }
};

const Step1 = () => {
  const { state, wardrobe, corpus, stepsInputs } = useMainStore((state) => ({
    state: state,
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    stepsInputs: state.stepsInputs,
  }));
  return (
    <>
      <Title>Základní specifikace</Title>
      <SelectBox
        type={"sizeWardrobe"}
        isAccept={stepsInputs.sizeWardrobe}
        text={getSizeWardrobeText(wardrobe, corpus, stepsInputs)}
      />
      <SelectBox
        type={"typeWardrobe"}
        isAccept={stepsInputs.typeWardrobe}
        text={getTypeWardrobeText(wardrobe)}
      />
      <SelectBox
        type={"countSections"}
        isAccept={stepsInputs.countSections && stepsInputs.countDoors}
        isInactive={!isBasicDataFilled(state)}
      />
    </>
  );
};

export default Step1;
