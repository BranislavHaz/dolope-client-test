import Img from "@/components/Img";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ImageRotator from "./ImageRotator";
import * as $ from "@/styles/web/homepage/Hero.styled";

import { Edit, Film, Check } from "react-feather";

const Hero = () => {
  return (
    <Section>
      <Container>
        <$.Wrap>
          <$.Block>
            <$.Title>
              Vytvořte si dizajn své skříně{" "}
              <span className="text-gradient">online</span>
            </$.Title>

            <$.Text>
              Nadizajnujte si vlastní vestavěnou skříň na míru přes náš
              plánovač. Celý proces vám{" "}
              <$.StrongText>nezabere více než 3 minuty</$.StrongText> a okamžitě
              získáte konečnou cenu bez skrytých poplatků včetně dopravy a
              montáže.
            </$.Text>
            <$.Benefits>
              <$.Benefit>
                <$.BenefitIcon>
                  <Check />
                </$.BenefitIcon>
                <span>Dodání v průměru do 14 prac. dní</span>
              </$.Benefit>
              <$.Benefit>
                <$.BenefitIcon>
                  <Check />
                </$.BenefitIcon>
                <span>Bezplatné zaměření a konzultace</span>
              </$.Benefit>
              <$.Benefit>
                <$.BenefitIcon>
                  <Check />
                </$.BenefitIcon>
                <span>Cena bez skrytých poplatků</span>
              </$.Benefit>
            </$.Benefits>

            <$.Buttons>
              <Button primary xl href="/konfigurator">
                Plánovač <Edit />
              </Button>
              {/*               <Button outline xl>
                Videonávod <Film />
              </Button> */}
            </$.Buttons>
          </$.Block>

          <$.ImagesWrap>
            <Img
              src="/images/web/configurator-device.png"
              alt="Obrázek rámu mobilního zařízení."
              fill
              style={{
                objectFit: "contain",
                background: "transparent",
                zIndex: 1,
              }}
            />
            <ImageRotator />
          </$.ImagesWrap>
        </$.Wrap>
      </Container>
    </Section>
  );
};

export default Hero;
