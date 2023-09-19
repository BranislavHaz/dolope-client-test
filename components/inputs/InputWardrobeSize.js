import React from "react";
import useDebounce from "@/hooks/useDebounce";
import useMainStore from "@/stores/useMainStore";

const InputWardrobeSize = () => {
  const { setWardrobeWidth, setWardrobeHeight } = useMainStore((state) => ({
    setWardrobeWidth: state.setWardrobeWidth,
    setWardrobeHeight: state.setWardrobeHeight,
  }));

  const onChangeWidth = useDebounce((e) => {
    setWardrobeWidth(Number(e.target.value * 10));
  }, 500);

  const onChangeHeight = useDebounce((e) => {
    setWardrobeHeight(Number(e.target.value * 10));
  }, 500);

  return (
    <>
      <label htmlFor="wardrobe-width">
        Zadajte šírku priestoru (cm):
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
        Zadajte hĺbku priestoru (cm):
        <input type="number" id="wardrobe-depth" />
      </label>
    </>
  );
};

export default InputWardrobeSize;
