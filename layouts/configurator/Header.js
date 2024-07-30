import Image from "next/image";
import * as $ from "@/styles/configurator/layouts/Header.styled";

const Header = () => {
  return (
    <$.Header>
      <$.Logo>
        <Image
          src={"/logos/dolope-logo.svg"}
          width={150}
          height={30}
          alt="Dolope - logo"
        />
      </$.Logo>
    </$.Header>
  );
};

export default Header;
