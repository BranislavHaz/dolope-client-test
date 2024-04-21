import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";

import FlashMessage from "../ui/FlashMessage";

const DecorSideWalls = ({ setHandleSubmit }) => {
  const { sideWalls, setIsModalActive, setFlashMessage } = useMainStore(
    (state) => ({
      sideWalls: state.sideWalls,
      setIsModalActive: state.setIsModalActive,
      setFlashMessage: state.setFlashMessage,
    })
  );

  const handleSubmit = () => {
    if (sideWalls.decorId) {
      setIsModalActive(false);
      setFlashMessage({ type: "error", value: false });
    } else {
      setFlashMessage({ type: "error", value: true });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [sideWalls.decorId]);

  return (
    <>
      <FlashMessage type={"error"}>Prosím vyberte typ dekoru.</FlashMessage>
      <Decors type={"sideWalls"} />
    </>
  );
};

export default DecorSideWalls;
