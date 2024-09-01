import Link from "next/link";
import Img from "@/components/Img";
import Content from "@/layouts/web/Content";
import skLayout from "@/locales/layouts/web/sk.json";
import czLayout from "@/locales/layouts/web/cz.json";

import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 216px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrap = styled.div`
  width: 80vw;
  height: 250px;
  position: relative;

  @media ${device.tablet} {
    width: 80vw;
    height: 450px;
  }
`;

const Button = styled.div`
  margin-top: 2rem;
  padding: 1rem 1.6rem;
  background-color: var(--primary-color);
  color: var(--dark-text-color);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.15s ease-in-out;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: var(--secundary-color);
    color: var(--light-text-color);
  }

  @media ${device.tablet} {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 2rem;
  }
`;

const NotFound = ({ translationsLayout, imgSrc, buttonText }) => {
  return (
    <Content translations={translationsLayout}>
      <Wrap>
        <ImageWrap>
          <Img
            src={imgSrc}
            alt={"404"}
            fill
            style={{
              objectFit: "contain",
              background: "transparent",
            }}
          />
        </ImageWrap>
        <Link href="/">
          <Button>{buttonText}</Button>
        </Link>
      </Wrap>
    </Content>
  );
};

export async function getStaticProps() {
  const language = process.env.NEXT_PUBLIC_LANGUAGE;
  const translationsLayout = language === "cz" ? czLayout : skLayout;
  const imgSrc =
    language === "cz" ? "/images/web/404cz.svg" : "/images/web/404sk.svg";
  const buttonText =
    language === "cz" ? "zpět na hlavní stránku" : "späť na hlavnú stránku";

  return {
    props: {
      translationsLayout,
      imgSrc,
      buttonText,
    },
  };
}

export default NotFound;
