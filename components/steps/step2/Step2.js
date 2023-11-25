import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

const Step2 = () => {
  const { state, wardrobe, corpus, stepsInputs } = useMainStore((state) => ({
    state: state,
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    stepsInputs: state.stepsInputs,
  }));
  return (
    <>
      <Title>Výběr typů</Title>
      <SelectBox
        type={"typeDoors"}
        //isAccept={stepsInputs.sizeWardrobe}
      />
    </>
  );
};

export default Step2;
