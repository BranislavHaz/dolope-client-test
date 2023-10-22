import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/ui/TypeImages.styled";

import { typeOfWardrobeImg } from "@/constants/imagesConf";

const TypeImages = () => {
  const { wardrobe, setWardrobeType } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    setWardrobeType: state.setWardrobeType,
  }));

  const setType = (type) => {
    return () => {
      if (type !== wardrobe.type) {
        setWardrobeType(type);
      }
    };
  };

  const getImages = (imagesArr) => {
    return imagesArr.map((obj, index) => {
      const { id, text, image } = obj;

      if (id && text && image.src) {
        return (
          <$.ImageWrap
            key={index}
            onClick={setType(id)}
            $isActive={wardrobe.type === id}
          >
            <$.ImageText>{text}</$.ImageText>
            <Image
              src={image.src}
              width={image.width ? image.width : "150"}
              height={image.height ? image.height : "150"}
              alt={image.alt ? image.alt : text}
            />
          </$.ImageWrap>
        );
      }
    });
  };

  return <$.TypeImages>{getImages(typeOfWardrobeImg)}</$.TypeImages>;
};

export default TypeImages;
