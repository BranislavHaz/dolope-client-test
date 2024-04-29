import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";

import toast from "react-hot-toast";

const DecorCorpus = ({ setHandleSubmit }) => {
  const { corpus, setIsModalActive } = useMainStore((state) => ({
    corpus: state.corpus,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    if (corpus.decorId) {
      setIsModalActive(false);
      toast.success("Dekor vnitřní části skříně byl uložen!", {
        className: "toast-mobile",
      });
    } else {
      toast.error("Vyberte dekor vnitřní části skříně!", {
        className: "toast-mobile",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [corpus.decorId]);

  return (
    <>
      <Decors type={"corpus"} />
    </>
  );
};

export default DecorCorpus;
