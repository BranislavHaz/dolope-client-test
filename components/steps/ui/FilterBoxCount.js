import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";
import * as $ from "@/styles/components/steps/ui/FilterBoxCount.styled";

const typeObj = {
  sections: { title: "sekce" },
  doors: { title: "dveře" },
};

const FilterBoxCount = ({ type, count, active }) => {
  const { sections, doors, setActiveFilter, setBeScrolled } = useMainStore(
    (state) => ({
      sections: state.sections,
      doors: state.doors,
      setActiveFilter: state.setActiveFilter,
      setBeScrolled: state.setBeScrolled,
    })
  );
  const setTimeout = useTimeout();

  const checkIsSelected = (i) => {
    switch (type) {
      case "sections":
        return sections.typeOfSections[i] || false;
      case "doors":
        return doors.typeDoors[i] || false;

      default:
        return false;
    }
  };

  const handleClick = (id) => () => {
    setBeScrolled(true);
    setActiveFilter(type, id);
    setTimeout(() => setBeScrolled(false), 1000);
  };

  const getFilterElements = (type, count, active) => {
    const filterElementsArr = [];
    for (let i = 1; i <= count; i++) {
      const content = `${i}. ${typeObj[type].title}`;
      filterElementsArr.push(
        <$.FilterElement
          key={i}
          onClick={handleClick(i)}
          $isActive={active === i}
          $isSelected={checkIsSelected(i)}
        >
          {content}
        </$.FilterElement>
      );
    }
    return filterElementsArr;
  };

  return (
    <$.FilterBoxWrap>{getFilterElements(type, count, active)}</$.FilterBoxWrap>
  );
};

export default FilterBoxCount;
