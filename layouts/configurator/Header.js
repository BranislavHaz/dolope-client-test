import Image from "next/image";
import * as $ from "@/styles/configurator/layouts/Header.styled";

const Header = ({ translations: t }) => {
  return (
    <$.Header>
      <$.Logo>
        <Image
          src={"/logos/dolope-logo.svg"}
          width={150}
          height={30}
          alt={t.alt_img}
        />
      </$.Logo>
    </$.Header>
  );
};

export default Header;
