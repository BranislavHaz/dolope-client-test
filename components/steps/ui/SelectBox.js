import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/ui/SelectBox.styled";

const selectBoxType = {
  sizeWardrobe: {
    imgSrc: "/icons/size-wardrobe.svg",
    title: "Rozměry skříně",
    text: "250x220x60 cm | 60 cm",
  },
  typeWardrobe: {
    imgSrc: "/icons/type-wardrobe.svg",
    title: "Typ skříně",
    text: "Mezi stěnami",
  },
  countSections: {
    imgSrc: "/icons/count-sections.svg",
    title: "Počet sekcí a dveří",
    text: "4x | 2x",
  },
};

const SelectBox = ({ type, isAccept }) => {
  const { modal, setIsModalActive } = useMainStore((state) => ({
    modal: state.modal,
    setIsModalActive: state.setIsModalActive,
  }));

  const handleClick = () => {
    setIsModalActive(true);
  };

  return (
    <$.SelectBoxWrap onClick={handleClick}>
      <$.Icon>
        <Image
          src={selectBoxType[type].imgSrc}
          width={30}
          height={30}
          alt={selectBoxType[type].title}
        />
        <$.AcceptIcon $isAccept={isAccept}>
          <Image
            src={"/icons/accept.svg"}
            width={20}
            height={20}
            alt={"Údaje byly vyplněny správně"}
          />
        </$.AcceptIcon>
      </$.Icon>
      <$.TextWrap>
        <$.Subtitle>{selectBoxType[type].title}</$.Subtitle>
        <$.Text>{selectBoxType[type].text}</$.Text>
      </$.TextWrap>
      <$.ArrowWrap>
        <Image
          src={"/icons/right-arrow.svg"}
          width={30}
          height={30}
          alt={"Šipka vpravo"}
        />
      </$.ArrowWrap>
    </$.SelectBoxWrap>
  );
};

export default SelectBox;
