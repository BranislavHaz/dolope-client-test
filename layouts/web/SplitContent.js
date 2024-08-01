import Image from "next/image";
import * as $ from "@/styles/web/layouts/SplitContent.styled";

const SplitContent = () => {
  return (
    <$.SplitContent>
      <$.Content>
        <$.Image>
          <Image
            src={`/images/web/test.png`}
            layout="fill"
            objectFit="contain"
            alt="Dolope - obrázek konfiguráora"
            className={"device active"}
          />
        </$.Image>
        <$.TextWrap>
          <$.Title>Easily view and manage your bills</$.Title>
          <$.Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat enim velit mollit. Exercitation veniam
            consequat. Link your bank or financial account Easy way to view your
            total balance Transaction history in real-time
          </$.Text>
        </$.TextWrap>
      </$.Content>
    </$.SplitContent>
  );
};
export default SplitContent;
