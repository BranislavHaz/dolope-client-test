import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";
import Decors from "./Decors";
import FilterDecor from "../ui/FilterDecor";

import toast from "react-hot-toast";

const DecorCorpus = ({ setHandleSubmit, translations: t }) => {
  const { corpus, setIsModalActive } = useMainStore((state) => ({
    corpus: state.corpus,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleSubmit = () => {
    if (corpus.decorId) {
      setIsModalActive(false);
      toast.success(t.decor_corpus.toast.success, {
        className: "small-device",
      });
    } else {
      toast.error(t.decor_corpus.toast.error, {
        className: "small-device",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [corpus.decorId]);

  return (
    <>
      <FilterDecor type={"corpus"} translations={t.decors.filter_decor} />
      <Decors type={"corpus"} translations={t.decors} />
    </>
  );
};

export default DecorCorpus;
