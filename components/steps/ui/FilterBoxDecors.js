import { useState } from "react";
import Image from "next/image";

import * as $ from "@/styles/components/steps/ui/FilterBoxDecors.styled";

const FilterBoxDecors = ({ type }) => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
  };

  return (
    <$.FilterBoxWrap>
      <$.BoxHeader onClick={toggleContent}>
        <$.IconWrap>
          <Image src={"/icons/filter.svg"} width={25} height={25} />
        </$.IconWrap>
        <$.Title>Filtrace a vyhledávání</$.Title>
      </$.BoxHeader>
      {isContentOpen && (
        <$.BoxContent>
          <$.Search placeholder="Vyhledejte název nebo kód dekoru" />
          <$.Text>Hello</$.Text>
          <$.Text>Hello</$.Text>
          <$.Text>Hello</$.Text>
          <$.SubmitWrap>
            <$.SubmitButton>Filtrovat</$.SubmitButton>
          </$.SubmitWrap>
        </$.BoxContent>
      )}
    </$.FilterBoxWrap>
  );
};

export default FilterBoxDecors;
