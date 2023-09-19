import useMainStore from "@/stores/useMainStore";

const InputWardrobeType = () => {
  const { setWardrobeType, setSideWalls } = useMainStore((state) => ({
    setWardrobeType: state.setWardrobeType,
    setSideWalls: state.setSideWalls,
  }));

  const handleSelectChange = (e) => {
    const selectValue = +e.target.value;
    setWardrobeType(selectValue);

    switch (selectValue) {
      case 1:
        setSideWalls({
          sideWallsCover: { left: false, right: false, count: 0 },
          sideWallsStop: { left: true, right: true, count: 2 },
        });
        break;

      case 2:
        setSideWalls({
          sideWallsCover: { left: false, right: true, count: 1 },
          sideWallsStop: { left: true, right: false, count: 1 },
        });
        break;

      case 3:
        setSideWalls({
          sideWallsCover: { left: true, right: false, count: 1 },
          sideWallsStop: { left: false, right: true, count: 1 },
        });
        break;

      case 4:
        setSideWalls({
          sideWallsCover: { left: true, right: true, count: 2 },
          sideWallsStop: { left: false, right: false, count: 0 },
        });
        break;

      default:
        break;
    }
  };

  return (
    <label htmlFor="wardrobe-type">
      Vyberte typ vstavanej skrine
      <select id="wardrobe-type" onChange={handleSelectChange}>
        <option value="1">Medzi stenami</option>
        <option value="2">Stena vľavo</option>
        <option value="3">Stena vpravo</option>
        <option value="4">V priestore</option>
      </select>
    </label>
  );
};

export default InputWardrobeType;
