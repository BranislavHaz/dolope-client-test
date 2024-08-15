import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/components/steps/ui/SelectBox.styled";

const SelectBox = ({
  type,
  isAccept,
  text,
  isInactive,
  id,
  isActive,
  translations: t,
}) => {
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

  const delay = id === 1 ? 0 : id * 0.1;

  const selectBoxType = {
    sizeWardrobe: {
      imgSrc: "/icons/size-wardrobe.svg",
      title: t.titles.size_wardrobe,
      type: "sizeWardrobe",
    },
    typeWardrobe: {
      imgSrc: "/icons/type-wardrobe.svg",
      title: t.titles.type_wardrobe,
      type: "typeWardrobe",
    },
    countSections: {
      imgSrc: "/icons/count-sections.svg",
      title: t.titles.count_sections,
      type: "countSections",
    },
    typeSections: {
      imgSrc: "/icons/type-sections.svg",
      title: t.titles.type_sections,
      type: "typeSections",
    },
    typeDoors: {
      imgSrc: "/icons/type-doors.svg",
      title: t.titles.type_doors,
      type: "typeDoors",
    },
    typeProfiles: {
      imgSrc: "/icons/type-profiles.svg",
      title: t.titles.type_profiles,
      type: "typeProfiles",
    },
    decorCorpus: {
      imgSrc: "/icons/decor-corpus.svg",
      title: t.titles.decor_corpus,
      type: "decorCorpus",
    },
    decorSideWalls: {
      imgSrc: "/icons/decor-sidewalls.svg",
      title: t.titles.decor_side_walls,
      type: "decorSideWalls",
    },
    decorDoors: {
      imgSrc: "/icons/decor-doors.svg",
      title: t.titles.decor_doors,
      type: "decorDoors",
    },
  };

  return (
    <$.SelectBoxWrap
      $isInactive={isInactive}
      $delayAnimation={delay}
      onClick={handleClick(selectBoxType[type].type)}
      $isActive={isActive}
      $isAccept={isAccept}
    >
      <$.Icon $isActive={isActive}>
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
      <$.TextWrap $isAccept={isAccept}>
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
