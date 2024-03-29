import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";
import ModalDoors from "@/components/modal/doors/ModalDoors";
import SubmitButton from "../ui/SubmitButton";

const DecorDoors = () => {
  const { stepsInputs, setIsModalActive } = useMainStore((state) => ({
    stepsInputs: state.stepsInputs,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <ModalDoors />
      <Decors type={"doors"} />
      <SubmitButton
        isVisible={stepsInputs.step3.decorDoors}
        submitAction={handleSubmit}
      />
    </>
  );
};

export default DecorDoors;
