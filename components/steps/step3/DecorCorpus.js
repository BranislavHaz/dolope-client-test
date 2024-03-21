import Image from "next/image";
import { useState } from "react";
import useMainStore from "@/stores/useMainStore";

import FilterBoxDecors from "../ui/FilterBoxDecors";

import * as $ from "@/styles/components/steps/step3/DecorCorpus.styled";

const DecorCorpus = () => {
  const { productsAPI, decorFilter } = useMainStore((state) => ({
    productsAPI: state.productsAPI,
    decorFilter: state.decorFilter,
  }));

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

  const getDecors = () => {
    return filteredDecors.map((decor) => {
      return (
        <div key={decor.id}>
          <Image
            src={`/images/decors/egger/${decor.id_manufacturer}.jpeg`}
            width={100}
            height={50}
          />
          {decor.name} - {`${decor.manufacturer}`}
        </div>
      );
    });
  };

  return (
    <$.Wrap>
      <FilterBoxDecors type={"corpus"} />
      <$.Elements>{getDecors()}</$.Elements>
    </$.Wrap>
  );
};

export default DecorCorpus;
