import React, { useState, useEffect, useRef } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/layouts/configurator/WardrobeView.styled";

import Wardrobe from "@/components/elements/Wardrobe";

const WardrobeView = () => {
  const { viewport } = useMainStore((state) => ({
    viewport: state.viewport,
  }));

  const [sizeWrapper, setSizeWrapper] = useState({ width: 0, height: 0 });
  const [sizeWardrobe, setSizeWardrobe] = useState({ width: 0, height: 0 });
  const [scaleFactor, setScaleFactor] = useState(undefined);

  const wardrobeViewRef = useRef();
  const wardrobeRef = useRef();

  /*   const scaleWardrobe = (viewportWardrobe) => {
    const { wrapper, wardrobe } = viewportWardrobe;

    if (
      wardrobe.width > 0.9 * wrapper.width ||
      wardrobe.height > 0.9 * wrapper.height
    ) {
      const scaleNum = Math.min(
        (0.9 * wrapper.width) / wardrobe.width,
        (0.9 * wrapper.height) / wardrobe.height
      );

      setScaleFactor(scaleNum);
    }
  }; */

  const scaleWardrobe = (viewportWardrobe) => {
    const { wrapper, wardrobe } = viewportWardrobe;

    // Výpočet scale pre oba rozmery
    const scaleWidth = (0.8 * wrapper.width) / wardrobe.width;
    const scaleHeight = (0.8 * wrapper.height) / wardrobe.height;

    // Nájdeme minimum z týchto dvoch hodnôt
    const scaleNum = Math.min(scaleWidth, scaleHeight);

    // Avšak, ak je komponent dieťa ešte menší než 50% veľkosti rodiča, umožníme mu sa zväčšiť na 50%.
    if (scaleNum < 0.5) {
      scaleNum = 0.5;
    }

    setScaleFactor(scaleNum);
    console.log(scaleFactor);
  };

  useEffect(() => {
    if (wardrobeViewRef.current && wardrobeRef.current) {
      const widthWrapper =
        wardrobeViewRef.current.getBoundingClientRect().width;
      const heightWrapper =
        wardrobeViewRef.current.getBoundingClientRect().height;
      const widthWardrobe = wardrobeRef.current.getBoundingClientRect().width;
      const heightWardrobe = wardrobeRef.current.getBoundingClientRect().height;

      setSizeWrapper({ width: widthWrapper, height: heightWrapper });
      setSizeWardrobe({ width: widthWardrobe, height: heightWardrobe });
    }
  }, [viewport, wardrobeViewRef, wardrobeRef]);

  useEffect(() => {
    scaleWardrobe({ wrapper: sizeWrapper, wardrobe: sizeWardrobe });
  }, [sizeWrapper, sizeWardrobe]);

  return (
    <$.WardrobeView ref={wardrobeViewRef}>
      {/* <div ref={wardrobeRef}> */}
      <Wardrobe scaleFactor={scaleFactor} />
      {/* </div> */}
    </$.WardrobeView>
  );
};

export default WardrobeView;
