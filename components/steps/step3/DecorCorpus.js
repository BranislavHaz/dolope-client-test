import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";
import SubmitButton from "../ui/SubmitButton";

const DecorCorpus = () => {
  const { stepsInputs, setIsModalActive } = useMainStore((state) => ({
    stepsInputs: state.stepsInputs,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <Decors type={"corpus"} />
      <SubmitButton
        isVisible={stepsInputs.step3.decorCorpus}
        submitAction={handleSubmit}
      />
    </>
  );
};

export default DecorCorpus;
