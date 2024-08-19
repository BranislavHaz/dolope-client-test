import Image from "next/image";
import Link from "next/link";
import * as $ from "@/styles/gdpr/layouts/Header.styled";

const Header = () => {
  return (
    <$.Header>
      <Link href={"/"}>
        <Image
          src={"/logos/dolope-logo.svg"}
          width={150}
          height={30}
          alt={"Dolope - logo"}
        />
      </Link>
    </$.Header>
  );
};

export default Header;
