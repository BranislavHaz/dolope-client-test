import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";
import * as $ from "@/styles/components/steps/ui/FilterBox.styled";

const typeObj = {
  doors: { title: "dveře" },
  sections: "sekce",
};

const FilterBox = ({ type, count, active }) => {
  const { setActiveFilter, setBeScrolled } = useMainStore((state) => ({
    setActiveFilter: state.setActiveFilter,
    setBeScrolled: state.setBeScrolled,
  }));
  const setTimeout = useTimeout();

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

export default FilterBox;
