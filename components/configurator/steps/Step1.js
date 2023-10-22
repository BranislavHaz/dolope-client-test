import Title from "@/components/ui/Title";
import Images2Row from "@/components/ui/Images2Row";

import { typeOfWardrobeImg } from "@/constants/imagesConf";

const Step1 = () => {
  return (
    <>
      <Title>Typ skříně</Title>
      <Images2Row type={"typeOfWardrobe"} images={typeOfWardrobeImg} />
    </>
  );
};

export default Step1;
