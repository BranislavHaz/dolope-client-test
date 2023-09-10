import React from "react";
import useDebounce from "@/hooks/useDebounce";
import useWardrobeStore from "@/stores/wardrobeStore";

const InputWardrobeSize = () => {
  const { setWardrobeWidth } = useWardrobeStore((state) => ({
    setWardrobeWidth: state.setWardrobeWidth,
  }));

  const onChangeWidth = useDebounce((e) => {
    setWardrobeWidth(e.target.value);
  }, 1000);

  return (
    <>
      <label htmlFor="wardrobe-width">
        Zadajte šírku priestoru
        <input type="number" id="wardrobe-width" onChange={onChangeWidth} />
      </label>
      <label htmlFor="wardrobe-height">
        Zadajte šírku priestoru
        <input type="number" id="wardrobe-left-height" />
      </label>
      <label htmlFor="wardrobe-depth">
        Zadajte šírku priestoru
        <input type="number" id="wardrobe-depth" />
      </label>
    </>
  );
};

export default InputWardrobeSize;
