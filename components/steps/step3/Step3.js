import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

const Step3 = () => {
  const { corpus, sideWalls, productsAPI, stepsInputs, modal } = useMainStore(
    (state) => ({
      corpus: state.corpus,
      sideWalls: state.sideWalls,
      productsAPI: state.productsAPI,
      stepsInputs: state.stepsInputs,
      modal: state.modal,
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
        isActive={modal.isActive && modal.type === "decorCorpus"}
        id={1}
      />
      <SelectBox
        type={"decorSideWalls"}
        text={getDecorName(sideWalls.decorId)}
        isAccept={stepsInputs.step3.decorSideWalls}
        isActive={modal.isActive && modal.type === "decorSideWalls"}
        id={2}
      />
      <SelectBox
        type={"decorDoors"}
        isAccept={stepsInputs.step3.decorDoors}
        isActive={modal.isActive && modal.type === "decorDoors"}
        id={3}
      />
    </>
  );
};

export default Step3;
