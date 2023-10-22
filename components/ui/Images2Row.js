import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/ui/Images2Row.styled";

const Images2Row = ({ type, images }) => {
  const { setWardrobeType } = useMainStore((state) => ({
    setWardrobeType: state.setWardrobeType,
  }));

  const getActionForType = (typeOfImages, value) => {
    return () => {
      if (typeOfImages === "typeOfWardrobe") {
        setWardrobeType(value);
      }
    };
  };

  const getImages = (imagesArr) => {
    return imagesArr.map((obj, index) => {
      const { id, text, image } = obj;

      if (id && text && image.src) {
        return (
          <$.ImageWrap key={index} onClick={getActionForType(type, id)}>
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

  return <$.Images2Row>{getImages(images)}</$.Images2Row>;
};

export default Images2Row;
