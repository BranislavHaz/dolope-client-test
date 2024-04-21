import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import UsedDoorsDecor from "./UsedDoorsDecor";
import Decors from "./Decors";
import ModalDoors from "@/components/modal/doors/ModalDoors";
import FlashMessage from "../ui/FlashMessage";

const DecorDoors = ({ setHandleSubmit }) => {
  const { doors, stepsInputs, setIsModalActive, setFlashMessage } =
    useMainStore((state) => ({
      doors: state.doors,
      stepsInputs: state.stepsInputs,
      setIsModalActive: state.setIsModalActive,
      setFlashMessage: state.setFlashMessage,
    }));

  const handleSubmit = () => {
    if (stepsInputs.step3.decorDoors) {
      setIsModalActive(false);
      setFlashMessage({ type: "error", value: false });
    } else {
      setFlashMessage({ type: "error", value: true });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [doors.typeDoors, stepsInputs.step3.decorDoors]);

  return (
    <>
      <FlashMessage type={"error"}>
        Prosím vyberte dekor pro všechny dveře..
      </FlashMessage>
      <ModalDoors />
      <UsedDoorsDecor />
      <Decors type={"doors"} />
    </>
  );
};

export default DecorDoors;
