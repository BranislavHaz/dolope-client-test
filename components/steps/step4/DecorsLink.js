import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/steps/step4/DecorsLink.styled";

const getImgUrl = (decor) => {
  if (decor.manufacturer === "Kronospan" || decor.manufacturer === "Egger") {
    return `/images/decors/${decor.id_manufacturer}.jpeg`;
  }
  if (decor.manufacturer === "AGC" || decor.manufacturer === "Lacobel") {
    return `/images/glass/${decor.id}.jpeg`;
  }
  return "";
};

const DecorsLink = ({ decors }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const handleClick = (decor) => {
    const imgUrl = getImgUrl(decor);

    state.setIsLightBoxImageUrl(imgUrl);
    state.setIsLightBoxActive(true);
  };

  return (
    <>
      {decors.map((decor) => (
        <$.Wrap onClick={() => handleClick(decor)}>
          <$.ImageWrap>
            <Image src={getImgUrl(decor)} width={50} height={50} />
          </$.ImageWrap>
          <$.TextWrap>
            {decor.manufacturer} - {decor.name_cz || decor.name} (
            {decor.id_manufacturer || decor.id})
          </$.TextWrap>
        </$.Wrap>
      ))}
    </>
  );
};

export default DecorsLink;
