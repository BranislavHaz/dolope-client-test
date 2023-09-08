import useWardrobeStore from "@/stores/wardrobeStore";

const InputSectionNumber = () => {
  const { setSectionsNumber } = useWardrobeStore((state) => ({
    setSectionsNumber: state.setSectionsNumber,
  }));

  const handleSelectChange = (e) => {
    setSectionsNumber(+e.target.value);
  };

  return (
    <label htmlFor="module-number">
      Vyberte si počet sekcií
      <select id="module-number" onChange={handleSelectChange}>
        <option value="0">--Prosím, vyberte si možnosť--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </label>
  );
};

export default InputSectionNumber;
