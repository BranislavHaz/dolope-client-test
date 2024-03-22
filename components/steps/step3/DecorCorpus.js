import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";

import FilterBoxDecors from "../ui/FilterBoxDecors";

import * as $ from "@/styles/components/steps/step3/DecorCorpus.styled";

const DecorCorpus = () => {
  const {
    corpus,
    setCorpusDecorId,
    setIsModalActive,
    productsAPI,
    decorFilter,
  } = useMainStore((state) => ({
    corpus: state.corpus,
    setCorpusDecorId: state.setCorpusDecorId,
    setIsModalActive: state.setIsModalActive,
    productsAPI: state.productsAPI,
    decorFilter: state.decorFilter,
  }));

  const set = useTimeout();

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
      decor.title
        .toLowerCase()
        .includes(decorFilter.corpus.search.toLowerCase());

    // Vracia dekory, ktoré zodpovedajú všetkým štyrom podmienkam
    return (
      matchesManufacturer && matchesDecorType && isAvailable && matchesSearch
    );
  });

  const handleClick = (decorId) => {
    setCorpusDecorId(decorId);
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
      <FilterBoxDecors type={"corpus"} />
      <$.Wrap>
        <$.DecorsWrap>{getDecors()}</$.DecorsWrap>
      </$.Wrap>
    </>
  );
};

export default DecorCorpus;
