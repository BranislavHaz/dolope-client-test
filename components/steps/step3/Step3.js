import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

const Step3 = () => {
  const { state, wardrobe, corpus, stepsInputs } = useMainStore((state) => ({
    state: state,
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    stepsInputs: state.stepsInputs,
  }));
  return (
    <>
      <Title>Dekory a barvy</Title>
      <SelectBox type={"decorCorpus"} />
      <SelectBox type={"decorWardrobe"} />
      <SelectBox type={"decorDoors"} />
    </>
  );
};

export default Step3;
