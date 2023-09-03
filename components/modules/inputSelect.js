import React from "react";
import useWardrobeStore from "@/stores/wardrobeStore";

const InputSelect = ({ id }) => {
  const { setSection1, setSection2, setSection3, setSection4 } =
    useWardrobeStore((state) => ({
      setSection1: state.setSection1,
      setSection2: state.setSection2,
      setSection3: state.setSection3,
      setSection4: state.setSection4,
    }));

  const sectionSetters = {
    section1: setSection1,
    section2: setSection2,
    section3: setSection3,
    section4: setSection4,
  };

  const handleSelectChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    if (sectionSetters["section" + id]) {
      sectionSetters["section" + id](selectedValue);
    }
  };

  return (
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
      </select>
    </label>
  );
};

export default InputSelect;
