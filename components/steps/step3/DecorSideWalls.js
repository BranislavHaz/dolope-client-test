import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";
import SubmitButton from "../ui/SubmitButton";

const DecorSideWalls = () => {
  const { stepsInputs, setIsModalActive } = useMainStore((state) => ({
    stepsInputs: state.stepsInputs,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <Decors type={"sideWalls"} />
      <SubmitButton
        isVisible={stepsInputs.step3.decorSideWalls}
        submitAction={handleSubmit}
      />
    </>
  );
};

export default DecorSideWalls;
