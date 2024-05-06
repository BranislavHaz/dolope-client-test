import * as $ from "@/styles/components/steps/step4/Step4.styled";

const Step4 = () => {
  let kamo = "ahoj";
  const handleClick = () => {
    kamo = kamo + "l";
    console.log(kamo);
  };

  return <$.ContentWrap onClick={handleClick}>{kamo}</$.ContentWrap>;
};

export default Step4;
