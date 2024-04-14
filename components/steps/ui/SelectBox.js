import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/ui/SelectBox.styled";

const selectBoxType = {
  sizeWardrobe: {
    imgSrc: "/icons/size-wardrobe.svg",
    title: "Rozměry skříně",
    type: "sizeWardrobe",
  },
  typeWardrobe: {
    imgSrc: "/icons/type-wardrobe.svg",
    title: "Typ skříně",
    type: "typeWardrobe",
  },
  countSections: {
    imgSrc: "/icons/count-sections.svg",
    title: "Počet sekcí a dveří",
    type: "countSections",
  },
  typeSections: {
    imgSrc: "/icons/type-sections.svg",
    title: "Typ sekcí",
    type: "typeSections",
  },
  typeDoors: {
    imgSrc: "/icons/type-doors.svg",
    title: "Typ dveří",
    type: "typeDoors",
  },
  typeProfiles: {
    imgSrc: "/icons/type-profiles.svg",
    title: "Typ profilů",
    type: "typeProfiles",
  },
  decorCorpus: {
    imgSrc: "/icons/decor-corpus.svg",
    title: "Dekor vnitřní části",
    type: "decorCorpus",
  },
  decorSideWalls: {
    imgSrc: "/icons/decor-sidewalls.svg",
    title: "Dekor vnější části",
    type: "decorSideWalls",
  },
  decorDoors: {
    imgSrc: "/icons/decor-doors.svg",
    title: "Dekor dveří",
    type: "decorDoors",
  },
};

const SelectBox = ({ type, isAccept, text, isInactive }) => {
  const { setIsModalActive, setModalType } = useMainStore((state) => ({
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
            src={"./icons/accept.svg"}
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
