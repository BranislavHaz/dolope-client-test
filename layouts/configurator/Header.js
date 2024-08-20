import Image from "next/image";
import Link from "next/link";
import * as $ from "@/styles/configurator/layouts/Header.styled";

const Header = ({ translations: t }) => {
  return (
    <$.Header>
      <$.Logo>
        <Link href={"/"}>
          <Image
            src={"/logos/dolope-logo.svg"}
            width={150}
            height={30}
            alt={t.alt_img}
          />
        </Link>
      </$.Logo>
    </$.Header>
  );
};

export default Header;
