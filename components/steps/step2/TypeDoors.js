import { useEffect, useState } from "react";
import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";

import FixedDoors from "./doorsElements/FixedDoors";
import VariableDoor1 from "./doorsElements/VariableDoor1";
import VariableDoor2 from "./doorsElements/VariableDoor2";
import VariableDoor3 from "./doorsElements/VariableDoor3";
import VariableDoor4 from "./doorsElements/VariableDoor4";

import toast from "react-hot-toast";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const TypeDoors = ({ setHandleSubmit }) => {
  const { doors, setStepsInputs, setIsModalActive, setActiveFilter } =
    useMainStore((state) => ({
      doors: state.doors,
      setStepsInputs: state.setStepsInputs,
      setIsModalActive: state.setIsModalActive,
      setActiveFilter: state.setActiveFilter,
    }));
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const countOfSelectedDoors = Object.keys(doors.typeDoors).length;

    if (countOfSelectedDoors === doors.count) {
      setStepsInputs("step2", "typeDoors", true);
      if (!isInitialRender) {
        toast.success("Typy sekcí byly uloženy!", {
          className: "larger-device",
        });
      }
    } else {
      setStepsInputs("step2", "typeDoors", false);
    }
    setIsInitialRender(false);
  }, [doors.typeDoors]);

  const handleSubmit = () => {
    if (Object.keys(doors.typeDoors).length === doors.count) {
      setIsModalActive(false);
      setActiveFilter("doors", 1);
      toast.success("Typy dveří byly uloženy!", { className: "small-device" });
    } else {
      toast.error("Vyberte typ pro všechny dveře!", {
        className: "small-device",
      });
      toast.error("Vyberte typ pro všechny dveře!", {
        className: "larger-device",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [doors.typeDoors]);

  return (
    <>
      <$.Wrap>
        <Title>Fixní výška dveří</Title>
        <FixedDoors />
        <Title>Variabilní výška dveří</Title>
        <$.TypeDoorsWrap>
          <VariableDoor1 id={6} />
          <VariableDoor2 id={7} />
          <VariableDoor3 id={8} />
          <VariableDoor4 id={9} />
        </$.TypeDoorsWrap>
      </$.Wrap>
    </>
  );
};

export default TypeDoors;
