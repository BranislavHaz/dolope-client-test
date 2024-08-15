import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";
import FilterDecor from "../ui/FilterDecor";

import toast from "react-hot-toast";

const DecorSideWalls = ({ setHandleSubmit, translations: t }) => {
  const { sideWalls, setIsModalActive } = useMainStore((state) => ({
    sideWalls: state.sideWalls,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    if (sideWalls.decorId) {
      setIsModalActive(false);
      toast.success(t.decor_side_walls.toast.success, {
        className: "small-device",
      });
    } else {
      toast.error(t.decor_side_walls.toast.error, {
        className: "small-device",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [sideWalls.decorId]);

  return (
    <>
      <FilterDecor type={"sideWalls"} translations={t.decors.filter_decor} />
      <Decors type={"sideWalls"} translations={t.decors} />
    </>
  );
};

export default DecorSideWalls;
