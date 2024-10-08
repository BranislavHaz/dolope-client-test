import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

import { isBasicDataFilled } from "@/utils/configurator/steps/step1/isBasicDataFilled";

const getSizeWardrobeText = (wardrobe, corpus, stepsInputs) => {
  const { width, height, depth } = wardrobe;
  const { topShelfHeight } = corpus;
  const { sizeWardrobe } = stepsInputs.step1;

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

const getCountSectionsText = (state) => {
  const { sections, doors } = state;

  if (sections.count > 0 && doors.count > 0) {
    return `Sekce: ${sections.count} | Dveře: ${doors.count}`;
  } else {
    return false;
  }
};

const Step1 = ({ translations: t }) => {
  const { state, wardrobe, corpus, stepsInputs, modal } = useMainStore(
    (state) => ({
      state: state,
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      stepsInputs: state.stepsInputs,
      modal: state.modal,
    })
  );

  return (
    <>
      <Title>{t.step1.title}</Title>
      <SelectBox
        type={"sizeWardrobe"}
        isAccept={stepsInputs.step1.sizeWardrobe}
        isActive={modal.isActive && modal.type === "sizeWardrobe"}
        text={getSizeWardrobeText(wardrobe, corpus, stepsInputs)}
        id={1}
        translations={t.select_box}
      />
      <SelectBox
        type={"typeWardrobe"}
        isAccept={stepsInputs.step1.typeWardrobe}
        isActive={modal.isActive && modal.type === "typeWardrobe"}
        text={getTypeWardrobeText(wardrobe)}
        id={2}
        translations={t.select_box}
      />
      <SelectBox
        type={"countSections"}
        isAccept={
          stepsInputs.step1.countSections && stepsInputs.step1.countDoors
        }
        isActive={modal.isActive && modal.type === "countSections"}
        isInactive={!isBasicDataFilled(state)}
        text={getCountSectionsText(state)}
        id={3}
        translations={t.select_box}
      />
    </>
  );
};

export default Step1;
