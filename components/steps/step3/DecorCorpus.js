import { useState } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/step3/DecorCorpus.styled";

const DecorCorpus = () => {
  const { doors, setSelectedProfile, setStepsInputs, productsAPI } =
    useMainStore((state) => ({
      doors: state.doors,
      setSelectedProfile: state.setSelectedProfile,
      setStepsInputs: state.setStepsInputs,
      productsAPI: state.productsAPI,
    }));

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
          {decor.name} - {decor.price_with_vat}
        </div>
      );
    });
  };

  return (
    <$.Wrap>
      <div>
        <button onClick={() => setSelectedManufacturer("Egger")}>Egger</button>
        <button onClick={() => setSelectedManufacturer("Kronospan")}>
          Kronospan
        </button>
      </div>
      <div>{getDecors()}</div>
    </$.Wrap>
  );
};

export default DecorCorpus;
