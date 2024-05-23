import useMainStore from "@/stores/useMainStore";

const getImgUrl = (decor) => {
  console.log(decor);
  if (decor.manufacturer === "Kornospan" || decor.manufacturer === "Egger") {
    return `/images/decors/${decor.id}.jpeg`;
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
    console.log(decor);

    state.setIsLightBoxImageUrl(`/images/decors/${imgUrl}.jpeg`);
    state.setIsLightBoxActive(true);
  };

  return (
    <>
      {decors.map((decor) => (
        <>
          <a onClick={() => handleClick(decor)}>
            {decor.manufacturer} - {decor.name_cz || decor.name} (
            {decor.id_manufacturer})
          </a>
        </>
      ))}
    </>
  );
};

export default DecorsLink;
