import Image from "next/image";
import * as $ from "@/styles/web/layouts/Footer.styled";

const Footer = () => {
  return (
    <$.FooterWrap>
      <$.Footer>
        <$.FooterLogo>
          <Image
            src={`/logos/dolope-logo.svg`}
            layout="fill"
            objectFit="contain"
            alt="Dolope logo"
          />
        </$.FooterLogo>
        <$.FooterText>Vyrobeno s láskou 💛 k řemeslu.</$.FooterText>
        <$.FooterLink>
          <a href="#">Ochrana osobních údajů</a>
        </$.FooterLink>
      </$.Footer>
    </$.FooterWrap>
  );
};

export default Footer;
