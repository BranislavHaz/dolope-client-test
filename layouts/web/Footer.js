import Image from "next/image";
import * as $ from "@/styles/web/layouts/Footer.styled";

const Footer = ({ translations: t }) => {
  return (
    <$.FooterWrap>
      <$.Footer>
        <$.FooterLogo>
          <Image
            src={`/logos/dolope-logo.svg`}
            layout="fill"
            objectFit="contain"
            alt={t.alt_img_logo}
          />
        </$.FooterLogo>
        <$.FooterText>{t.text}</$.FooterText>
        <$.FooterLink>
          <a href="#">{t.gdpr}</a>
        </$.FooterLink>
      </$.Footer>
    </$.FooterWrap>
  );
};

export default Footer;
