import useMainStore from "@/stores/useMainStore";
import Button from "./Button";
import * as $ from "@/styles/components/steps/ui/FilterDecor.styled";

const FilterDecor = ({ type }) => {
  const { decorFilter, setDecorFilter } = useMainStore((state) => ({
    decorFilter: state.decorFilter,
    setDecorFilter: state.setDecorFilter,
  }));

  const getIsSelected = (materialType) => {
    switch (materialType) {
      case "wood":
        return decorFilter.doors.materialType === "wood"
          ? "darkColor"
          : "lightColor";

      case "mirror":
        return decorFilter.doors.glassType === "mirror"
          ? "darkColor"
          : "lightColor";

      case "glass":
        return decorFilter.doors.glassType === "glass"
          ? "darkColor"
          : "lightColor";
      default:
        return "lightColor";
    }
  };

  const handleClick = (type) => {
    switch (type) {
      case "wood":
        setDecorFilter({
          type: "doors",
          materialType: "wood",
          search: null,
          manufacturer: "All",
          decorType: "all",
          glassType: "all",
        });
        break;

      case "mirror":
        setDecorFilter({
          type: "doors",
          materialType: "glass",
          search: null,
          manufacturer: "All",
          decorType: "all",
          glassType: "mirror",
        });
        break;

      case "glass":
        setDecorFilter({
          type: "doors",
          materialType: "glass",
          search: null,
          manufacturer: "All",
          decorType: "all",
          glassType: "glass",
        });
        break;

      default:
        break;
    }
  };

  return (
    <$.Wrap>
      <$.SearchWrap>
        <$.SearchInput
          placeholder="Vyhledejte název nebo kód dekoru"
          /*           value={searchValue || ""}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}*/
          $isError={false}
        />
        <$.SearchErrorText>Minimálně 3 znaky</$.SearchErrorText>
      </$.SearchWrap>
      <$.MaterialTypeWrap>
        <Button
          type={getIsSelected("wood")}
          handleClick={() => handleClick("wood")}
        >
          Dřevotříska
        </Button>
        <Button
          type={getIsSelected("mirror")}
          handleClick={() => handleClick("mirror")}
        >
          Zrcadla
        </Button>
        <Button
          type={getIsSelected("glass")}
          handleClick={() => handleClick("glass")}
        >
          Skla
        </Button>
      </$.MaterialTypeWrap>
    </$.Wrap>
  );
};

export default FilterDecor;
