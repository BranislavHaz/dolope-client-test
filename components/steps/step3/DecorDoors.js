import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import UsedDoorsDecor from "./UsedDoorsDecor";

import Decors from "./Decors";
import Doors from "@/components/elements/Doors";

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
      toast.success("Dekory dveří byly uloženy!", {
        className: "small-device",
      });
    } else {
      toast.error("Vyberte dekor pro všechny dveře a jejich sekce!", {
        className: "small-device",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [doors.typeDoors, stepsInputs.step3.decorDoors]);

  return (
    <>
      <Doors type={"modal"} />
      <UsedDoorsDecor />
      <Decors type={"doors"} />
    </>
  );
};

export default DecorDoors;
