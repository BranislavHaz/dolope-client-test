import useWardrobeStore from "@/stores/wardrobeStore";

const InputSectionsCount = () => {
  const { setSectionsCount } = useWardrobeStore((state) => ({
    setSectionsCount: state.setSectionsCount,
  }));

  const handleSelectChange = (e) => {
    setSectionsCount(+e.target.value);
  };

  return (
    <label htmlFor="module-count">
      Vyberte si počet sekcií
      <select id="module-count" onChange={handleSelectChange}>
        <option value="0">--Prosím, vyberte si možnosť--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </label>
  );
};

export default InputSectionsCount;
