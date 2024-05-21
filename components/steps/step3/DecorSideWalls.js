import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";
import SearchDecors from "../ui/SearchDecors";

import toast from "react-hot-toast";

const DecorSideWalls = ({ setHandleSubmit }) => {
  const { sideWalls, setIsModalActive } = useMainStore((state) => ({
    sideWalls: state.sideWalls,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    if (sideWalls.decorId) {
      setIsModalActive(false);
      toast.success("Dekor vnější části skříně byl uložen!", {
        className: "small-device",
      });
    } else {
      toast.error("Vyberte dekor vnější části skříně!", {
        className: "small-device",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [sideWalls.decorId]);

  return (
    <>
      <SearchDecors type={"sideWalls"} />
      <Decors type={"sideWalls"} />
    </>
  );
};

export default DecorSideWalls;
