import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

const Step3 = () => {
  const { state, wardrobe, corpus, productsAPI, stepsInputs } = useMainStore(
    (state) => ({
      state: state,
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      productsAPI: state.productsAPI,
      stepsInputs: state.stepsInputs,
    })
  );

  const getDecorName = (productId) => {
    const product = productsAPI.dtd18.find(
      (product) => product.id === productId
    );
    return product ? product.name_cz : "";
  };

  return (
    <>
      <Title>Dekory a barvy</Title>
      <SelectBox
        type={"decorCorpus"}
        text={getDecorName(corpus.decorId)}
        isAccept={stepsInputs.step3.decorCorpus}
      />
      <SelectBox
        type={"decorWardrobe"}
        isAccept={stepsInputs.step3.decorWardrobe}
      />
      <SelectBox type={"decorDoors"} isAccept={stepsInputs.step3.decorDoors} />
    </>
  );
};

export default Step3;
