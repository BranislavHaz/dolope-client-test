import Image from "next/image";
import Section from "@/components/web/Section";
import * as $ from "@/styles/web/components/VisualizationSection.styled";

const VisualizationSection = ({ translations: t }) => {
  return (
    <Section id={"visualization"} label={t.label} title={t.title}>
      <$.Wrap>
        <$.Text>{t.description}</$.Text>
        <$.Images>
          <$.ImageWrap>
            <Image
              src={`/images/web/vizual1.png`}
              layout="fill"
              objectFit="contain"
              alt={t.alt_imgs["1"]}
              className={"device active"}
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <Image
              src={`/images/web/vizual2.png`}
              layout="fill"
              objectFit="contain"
              alt={t.alt_imgs["2"]}
              className={"device active"}
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <Image
              src={`/images/web/vizual3.png`}
              layout="fill"
              objectFit="contain"
              alt={t.alt_imgs["3"]}
              className={"device active"}
            />
          </$.ImageWrap>
        </$.Images>
      </$.Wrap>
    </Section>
  );
};

export default VisualizationSection;
