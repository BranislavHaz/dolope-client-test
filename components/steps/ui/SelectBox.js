import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/ui/SelectBox.styled";

const selectBoxType = {
  sizeWardrobe: {
    imgSrc: "/icons/size-wardrobe.svg",
    title: "Rozměry skříně",
    text: "250x220x60 cm | 60 cm",
    type: "sizeWardrobe",
  },
  typeWardrobe: {
    imgSrc: "/icons/type-wardrobe.svg",
    title: "Typ skříně",
    text: "Mezi stěnami",
    type: "typeWardrobe",
  },
  countSections: {
    imgSrc: "/icons/count-sections.svg",
    title: "Počet sekcí a dveří",
    text: "4x | 2x",
    type: "countSections",
  },
};

const SelectBox = ({ type, isAccept, text, isInactive }) => {
  const { modal, setIsModalActive, setModalType } = useMainStore((state) => ({
    modal: state.modal,
    setIsModalActive: state.setIsModalActive,
    setModalType: state.setModalType,
  }));

  const handleClick = (type) => () => {
    if (!isInactive) {
      setModalType(type);
      setIsModalActive(true);
    }
  };

  return (
    <$.SelectBoxWrap
      $isInactive={isInactive}
      onClick={handleClick(selectBoxType[type].type)}
    >
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
        {text && <$.Text>{text}</$.Text>}
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
