import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import UsedDoorsDecor from "./UsedDoorsDecor";

import Decors from "./Decors";
import ModalDoors from "@/components/modal/doors/ModalDoors";

import toast from "react-hot-toast";

const DecorDoors = ({ setHandleSubmit }) => {
  const { doors, stepsInputs, setIsModalActive } = useMainStore((state) => ({
    doors: state.doors,
    stepsInputs: state.stepsInputs,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    if (stepsInputs.step3.decorDoors) {
      setIsModalActive(false);
      toast.success("Dekory dveří byly uloženy!");
    } else {
      toast.error("Vyberte dekor pro všechny dveře a jejich sekce!");
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [doors.typeDoors, stepsInputs.step3.decorDoors]);

  return (
    <>
      <ModalDoors />
      <UsedDoorsDecor />
      <Decors type={"doors"} />
    </>
  );
};

export default DecorDoors;
