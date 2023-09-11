import React from "react";
import useDebounce from "@/hooks/useDebounce";
import useWardrobeStore from "@/stores/wardrobeStore";

const InputWardrobeSize = () => {
  const { setWardrobeWidth, setWardrobeHeight } = useWardrobeStore((state) => ({
    setWardrobeWidth: state.setWardrobeWidth,
    setWardrobeHeight: state.setWardrobeHeight,
  }));

  const onChangeWidth = useDebounce((e) => {
    setWardrobeWidth(e.target.value * 10);
  }, 500);

  const onChangeHeight = useDebounce((e) => {
    setWardrobeHeight(e.target.value * 10);
  }, 500);

  return (
    <>
      <label htmlFor="wardrobe-width">
        Zadajte šírku priestoru:
        <input type="number" id="wardrobe-width" onChange={onChangeWidth} />
      </label>
      <label htmlFor="wardrobe-height">
        Zadajte výšku priestoru (cm):
        <input
          type="number"
          id="wardrobe-left-height"
          onChange={onChangeHeight}
        />
      </label>
      <label htmlFor="wardrobe-depth">
        Zadajte hĺbku priestoru:
        <input type="number" id="wardrobe-depth" />
      </label>
    </>
  );
};

export default InputWardrobeSize;
