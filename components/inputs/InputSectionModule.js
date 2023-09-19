import useMainStore from "@/stores/useMainStore";

const InputSectionModule = ({ id }) => {
  const { setSectionsType } = useMainStore((state) => ({
    setSectionsType: state.setSectionsType,
  }));

  const handleSelectChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setSectionsType(id, selectedValue);
  };

  return (
    <>
      <label htmlFor={"section-select-" + id}>
        Vyberte si modul pre {id}. sekciu:
        <select
          name="section"
          id={"section-select-" + id}
          onChange={handleSelectChange}
        >
          <option value="0">--Prosím, vyberte si možnosť--</option>
          <option value="1">Modul 1</option>
          <option value="2">Modul 2</option>
          <option value="3">Modul 3</option>
          <option value="4">Modul 4</option>
          <option value="5">Modul 5</option>
          <option value="6">Modul 6</option>
          <option value="7">Modul 7</option>
        </select>
      </label>
    </>
  );
};

export default InputSectionModule;
