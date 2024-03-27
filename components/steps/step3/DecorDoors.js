import Decors from "./Decors";
import ModalDoors from "@/components/modal/doors/ModalDoors";

const DecorDoors = () => {
  return (
    <>
      <ModalDoors />
      <Decors type={"doors"} />
    </>
  );
};

export default DecorDoors;
