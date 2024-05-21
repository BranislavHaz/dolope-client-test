import { useState, useEffect } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/ui/SearchDecors.styled";

const SearchDecors = ({ type }) => {
  const { decorFilter, setDecorFilter } = useMainStore((state) => ({
    decorFilter: state.decorFilter,
    setDecorFilter: state.setDecorFilter,
  }));

  const [searchValue, setSearchValue] = useState(decorFilter[type].search);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setSearchValue(decorFilter[type].search);
  }, [decorFilter[type].search]);

  const handleSubmit = () => {
    if (searchValue && searchValue.length < 3) {
      setIsError(true);
    } else {
      setIsError(false);
      setDecorFilter({ type, search: searchValue || null });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length >= 3) {
      setIsError(false);
    }

    if (value.length === 0) {
      setIsError(false);
      setDecorFilter({ type, search: null });
    }
  };

  return (
    <$.SearchWrap>
      <$.SearchInput
        placeholder="Vyhledejte název nebo kód dekoru"
        value={searchValue || ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        $isError={isError}
      />
      <$.SearchIcon onClick={handleSubmit}>
        <Image
          src={"/icons/search-icon.svg"}
          width={50}
          height={50}
          alt="Search icon"
        />
      </$.SearchIcon>
      <$.SearchErrorText $isError={isError}>
        Minimálně 3 znaky
      </$.SearchErrorText>
    </$.SearchWrap>
  );
};

export default SearchDecors;
