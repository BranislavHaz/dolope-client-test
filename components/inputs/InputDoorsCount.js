import useMainStore from "@/stores/useMainStore";

const InputDoorsCount = () => {
  const { setDoorsCount } = useMainStore((state) => ({
    setDoorsCount: state.setDoorsCount,
  }));

  const handleSelectChange = (e) => {
    setDoorsCount(+e.target.value);
  };

  return (
    <label htmlFor="module-count">
      Vyberte počet dverí
      <select id="module-count" onChange={handleSelectChange}>
        <option value="0">--Prosím, vyberte si možnosť--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </label>
  );
};

export default InputDoorsCount;
