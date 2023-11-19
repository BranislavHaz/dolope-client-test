import useMainStore from "@/stores/useMainStore";
import Title from "./ui/Title";
import SelectBox from "./ui/SelectBox";

const getSizeWardrobeText = (wardrobe, corpus, statusInput) => {
  const { width, height, depth } = wardrobe;
  const { topShelfHeight } = corpus;
  const { sizeWardrobe } = statusInput;

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
  const { wardrobe, corpus, statusInput } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    statusInput: state.statusInput,
  }));
  return (
    <>
      <Title>Základní specifikace</Title>
      <SelectBox
        type={"sizeWardrobe"}
        isAccept={statusInput.sizeWardrobe}
        text={getSizeWardrobeText(wardrobe, corpus, statusInput)}
      />
      <SelectBox
        type={"typeWardrobe"}
        isAccept={statusInput.typeWardrobe}
        text={getTypeWardrobeText(wardrobe)}
      />
      <SelectBox type={"countSections"} />
    </>
  );
};

export default Step1;
