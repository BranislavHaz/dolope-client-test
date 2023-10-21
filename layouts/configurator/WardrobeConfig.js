import Image from "next/image";
import * as $ from "@/styles/layouts/configurator/WardrobeConfig.styled";

import Title from "@/components/configuratorUI/Title";

const WardrobeConfig = () => {
  return (
    <$.WardrobeConfig>
      <$.ContentWrapper>
        <Title>Typ skříně</Title>
        <$.Images2Row>
          <$.ImageWrap>
            <$.AboutText>Mezi stěnami</$.AboutText>
            <Image
              src="/images/mezi-stenami.svg"
              layout="responsive"
              width={150}
              height={150}
              alt="Mezi stěnami"
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <$.AboutText>V prostoru</$.AboutText>
            <Image
              src="/images/v-prostoru.svg"
              layout="responsive"
              width={150}
              height={150}
              alt="V prostoru"
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <$.AboutText>Stena vlevo</$.AboutText>
            <Image
              src="/images/stena-vlevo.svg"
              layout="responsive"
              width={150}
              height={150}
              alt="Stena vlevo"
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <$.AboutText>Stena vpravo</$.AboutText>
            <Image
              src="/images/stena-vpravo.svg"
              layout="responsive"
              width={150}
              height={150}
              alt="Stena vpravo"
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <$.AboutText>Stena vlevo</$.AboutText>
            <Image
              src="/images/stena-vlevo.svg"
              layout="responsive"
              width={150}
              height={150}
              alt="Stena vlevo"
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <$.AboutText>Stena vpravo</$.AboutText>
            <Image
              src="/images/stena-vpravo.svg"
              layout="responsive"
              width={150}
              height={150}
              alt="Stena vpravo"
            />
          </$.ImageWrap>
        </$.Images2Row>
      </$.ContentWrapper>
    </$.WardrobeConfig>
  );
};

export default WardrobeConfig;
