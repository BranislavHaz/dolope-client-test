import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import UsedDoorsDecor from "./UsedDoorsDecor";

import Decors from "./Decors";
import Doors from "@/components/elements/Doors";
import Button from "../ui/Button";
import SearchDecors from "../ui/SearchDecors";
import FilterDecor from "../ui/FilterDecor";

import toast from "react-hot-toast";

import * as $ from "@/styles/components/steps/step3/DecorDoors.styled";

const DecorDoors = ({ setHandleSubmit }) => {
  const { doors, stepsInputs, setIsModalActive, decorFilter, setDecorFilter } =
    useMainStore((state) => ({
      doors: state.doors,
      stepsInputs: state.stepsInputs,
      setIsModalActive: state.setIsModalActive,
      decorFilter: state.decorFilter,
      setDecorFilter: state.setDecorFilter,
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

  /*   const getIsSelected = (type) => {
    switch (type) {
      case "wood":
        return decorFilter.doors.materialType === "wood"
          ? "darkColor"
          : "lightColor";

      case "mirror":
        return decorFilter.doors.glassType === "mirror"
          ? "darkColor"
          : "lightColor";

      case "glass":
        return decorFilter.doors.glassType === "glass"
          ? "darkColor"
          : "lightColor";
      default:
        return "lightColor";
    }
  };

  const handleClick = (type) => {
    console.log(type);
    switch (type) {
      case "wood":
        setDecorFilter({
          type: "doors",
          materialType: "wood",
          search: null,
          manufacturer: "All",
          decorType: "all",
          glassType: "all",
        });
        break;

      case "mirror":
        setDecorFilter({
          type: "doors",
          materialType: "glass",
          search: null,
          manufacturer: "All",
          decorType: "all",
          glassType: "mirror",
        });
        break;

      case "glass":
        setDecorFilter({
          type: "doors",
          materialType: "glass",
          search: null,
          manufacturer: "All",
          decorType: "all",
          glassType: "glass",
        });
        break;

      default:
        break;
    }
  }; */

  return (
    <>
      <SearchDecors type={"doors"} />
      <Doors type={"modal"} />
      <FilterDecor type={"doors"} />
      {/*       <$.TypeDecorsWrap>
        <Button
          type={getIsSelected("wood")}
          handleClick={() => handleClick("wood")}
        >
          Dřevotříska
        </Button>
        <Button
          type={getIsSelected("mirror")}
          handleClick={() => handleClick("mirror")}
        >
          Zrcadla
        </Button>
        <Button
          type={getIsSelected("glass")}
          handleClick={() => handleClick("glass")}
        >
          Skla
        </Button>
      </$.TypeDecorsWrap> */}
      <UsedDoorsDecor />
      <Decors type={"doors"} />
    </>
  );
};

export default DecorDoors;
