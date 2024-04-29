import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";

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
        className: "toast-mobile",
      });
    } else {
      toast.error("Vyberte dekor vnější části skříně!", {
        className: "toast-mobile",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [sideWalls.decorId]);

  return (
    <>
      <Decors type={"sideWalls"} />
    </>
  );
};

export default DecorSideWalls;
