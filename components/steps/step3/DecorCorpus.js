import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";

import * as $ from "@/styles/components/steps/step3/DecorCorpus.styled";

const DecorCorpus = () => {
  const {
    corpus,
    setCorpusDecorId,
    setIsModalActive,
    productsAPI,
    decorFilter,
    setStepsInputs,
  } = useMainStore((state) => ({
    corpus: state.corpus,
    setCorpusDecorId: state.setCorpusDecorId,
    setIsModalActive: state.setIsModalActive,
    productsAPI: state.productsAPI,
    decorFilter: state.decorFilter,
    setStepsInputs: state.setStepsInputs,
  }));

  const set = useTimeout();
  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredDecors = productsAPI.dtd18.filter((decor) => {
    const matchesManufacturer =
      decorFilter.corpus.manufacturer === "All" ||
      decor.manufacturer === decorFilter.corpus.manufacturer;

    const matchesDecorType =
      decorFilter.corpus.decorType === "all" ||
      decor.category === decorFilter.corpus.decorType;

    const isAvailable = decor.availability === true;

    // Kontrola, či search reťazec je null alebo prázdný, alebo sa nachádza v title
    const matchesSearch =
      !decorFilter.corpus.search ||
      normalizeString(decor.title).includes(
        normalizeString(decorFilter.corpus.search)
      );

    // Vracia dekory, ktoré zodpovedajú všetkým štyrom podmienkam
    return (
      matchesManufacturer && matchesDecorType && isAvailable && matchesSearch
    );
  });

  const handleClick = (decorId) => {
    setCorpusDecorId(decorId);
    setStepsInputs("step3", "decorCorpus", true);
    set(() => {
      setIsModalActive(false);
    }, 280);
  };

  const getDecors = () => {
    return filteredDecors.map((decor) => {
      return (
        <$.DecorWrap
          key={decor.id}
          $isActive={corpus.decorId === decor.id}
          onClick={() => handleClick(decor.id)}
        >
          {
            <$.DecorImage>
              <Image
                src={`/images/decors/egger/${decor.id_manufacturer}.jpeg`}
                width={100}
                height={100}
              />
            </$.DecorImage>
          }
          <$.DecorTitle>{`${decor.name} (${decor.id_manufacturer}) - ${decor.label}`}</$.DecorTitle>
        </$.DecorWrap>
      );
    });
  };

  return (
    <>
      <$.Wrap>
        <$.DecorsWrap>{getDecors()}</$.DecorsWrap>
      </$.Wrap>
    </>
  );
};

export default DecorCorpus;
