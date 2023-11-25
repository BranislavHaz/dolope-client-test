import * as $ from "@/styles/components/steps/ui/FilterBox.styled";

const FilterBox = ({ type }) => {
  return (
    <$.FilterBoxWrap>
      <$.FilterElement $isActive={true}>1. sekce</$.FilterElement>
      <$.FilterElement>2. dveře</$.FilterElement>
      <$.FilterElement>3. dveře</$.FilterElement>
    </$.FilterBoxWrap>
  );
};

export default FilterBox;
