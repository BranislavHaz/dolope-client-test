import Image from "next/image";
import { useState } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/step3/DecorCorpus.styled";

const DecorCorpus = () => {
  const { productsAPI, decorFilter, setDecorFilter } = useMainStore(
    (state) => ({
      productsAPI: state.productsAPI,
      decorFilter: state.decorFilter,
      setDecorFilter: state.setDecorFilter,
    })
  );

  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  const filteredManufacturer = selectedManufacturer
    ? productsAPI.dtd18.filter(
        (decor) =>
          decor.manufacturer === selectedManufacturer &&
          decor.availability === true
      )
    : [];

  const getDecors = () => {
    return filteredManufacturer.map((decor) => {
      return (
        <div key={decor.id}>
          <Image
            src={`/images/decors/egger/${decor.id_manufacturer}.jpeg`}
            width={100}
            height={50}
          />
          {decor.id} - {`${decor.id_manufacturer}.jpeg`}
        </div>
      );
    });
  };

  return (
    <$.Wrap>
      <div>
        {/*         <button onClick={() => setSelectedManufacturer("Egger")}>Egger</button>
        <button onClick={() => setSelectedManufacturer("Kronospan")}>
          Kronospan
        </button> */}
        <button
          onClick={() => setDecorFilter({ type: "corpus", search: "janko" })}
        >
          Egger
        </button>
        <button
          onClick={() =>
            setDecorFilter({ type: "corpus", manufacturer: "Egger" })
          }
        >
          Kronospan
        </button>
      </div>
      <div>{getDecors()}</div>
    </$.Wrap>
  );
};

export default DecorCorpus;
