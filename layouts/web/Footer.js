import Img from "@/components/Img";
import Link from "next/link";
import Section from "@/components/Section";
import Container from "@/components/Container";

import * as $ from "@/styles/layouts/web/Footer.styled";

const Footer = ({ translations: t }) => {
  return (
    <Section m={0}>
      <Container>
        <$.Footer>
          <$.FooterLogo href="/">
            <Img
              src={`/logos/dolope-logo.svg`}
              alt={t.alt_img_logo}
              fill
              style={{ objectFit: "contain" }}
            />
          </$.FooterLogo>
          <$.FooterText>{t.text}</$.FooterText>
          <$.FooterLink>
            <Link href="/gdpr">{t.gdpr}</Link>
          </$.FooterLink>
        </$.Footer>
      </Container>
    </Section>
  );
};

export default Footer;
