import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";

import FlashMessage from "../ui/FlashMessage";

const DecorCorpus = ({ setHandleSubmit }) => {
  const { corpus, setIsModalActive, setFlashMessage } = useMainStore(
    (state) => ({
      corpus: state.corpus,
      setIsModalActive: state.setIsModalActive,
      setFlashMessage: state.setFlashMessage,
    })
  );

  const handleSubmit = () => {
    if (corpus.decorId) {
      setIsModalActive(false);
      setFlashMessage({ type: "error", value: false });
    } else {
      setFlashMessage({ type: "error", value: true });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [corpus.decorId]);

  return (
    <>
      <FlashMessage type={"error"}>Prosím vyberte typ dekoru.</FlashMessage>
      <Decors type={"corpus"} />
    </>
  );
};

export default DecorCorpus;
