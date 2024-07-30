import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/ui/LightBox.styled";

const LightBox = () => {
  const { isActive, imgUrl, setIsLightBoxActive, setIsLightBoxImageUrl } =
    useMainStore((state) => ({
      isActive: state.lightBox.isActive,
      imgUrl: state.lightBox.imgUrl,
      setIsLightBoxActive: state.setIsLightBoxActive,
      setIsLightBoxImageUrl: state.setIsLightBoxImageUrl,
    }));

  const handleClose = (e) => {
    e.stopPropagation();
    setIsLightBoxActive(false);
    setIsLightBoxImageUrl(undefined);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  return (
    <$.LightBox
      onKeyDown={handleKeyDown}
      onClick={handleClose}
      $isActive={isActive && imgUrl}
    >
      <$.CloseIcon onClick={handleClose}>X</$.CloseIcon>
      <$.LightBoxContent>
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          onClick={(e) => e.stopPropagation()}
        />
      </$.LightBoxContent>
    </$.LightBox>
  );
};

export default LightBox;
