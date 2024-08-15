import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import UsedDoorsDecor from "./UsedDoorsDecor";

import Decors from "./Decors";
import Doors from "@/components/configurator/elements/Doors";
import FilterDecor from "../ui/FilterDecor";

import toast from "react-hot-toast";

const DecorDoors = ({ setHandleSubmit, translations: t }) => {
  const { doors, stepsInputs, setIsModalActive } = useMainStore((state) => ({
    doors: state.doors,
    stepsInputs: state.stepsInputs,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    if (stepsInputs.step3.decorDoors) {
      setIsModalActive(false);
      toast.success(t.decor_doors.toast.success, {
        className: "small-device",
      });
    } else {
      toast.error(t.decor_doors.toast.error, {
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
      <UsedDoorsDecor translations={t.decors} />
      <FilterDecor type={"doors"} translations={t.decors.filter_decor} />
      <Decors type={"doors"} translations={t.decors} />
    </>
  );
};

export default DecorDoors;
