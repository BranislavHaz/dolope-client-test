import React from "react";
import useWardrobeStore from "@/stores/wardrobeStore";

const InputSelect = ({ id }) => {
  const { setSections } = useWardrobeStore((state) => ({
    setSections: state.setSections,
  }));

  const handleSelectChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setSections(id, selectedValue);
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
        </select>
      </label>
    </>
  );
};

export default InputSelect;
