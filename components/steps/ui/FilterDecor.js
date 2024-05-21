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
        return decorFilter.doors.materialType === "mirror"
          ? "darkColor"
          : "lightColor";

      case "glass":
        return decorFilter.doors.materialType === "glass"
          ? "darkColor"
          : "lightColor";
      default:
        return "lightColor";
    }
  };

  const handleClick = (materialType) => {
    setDecorFilter({
      type: "doors",
      search: null,
      materialType,
    });
  };

  return (
    <$.Wrap>
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
