import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/web/layouts/Header.styled";

const Header = () => {
  const { setIsMobileMenuActive } = useMainStore((state) => ({
    setIsMobileMenuActive: state.setIsMobileMenuActive,
  }));

  const showMobileNavHandle = () => {
    setIsMobileMenuActive(true);
  };

  return (
    <$.Header id="header">
      <$.HeaderContentDesktop>
        <$.Logo>
          <a href="#header">
            <Image
              src={"/logos/dolope-logo.svg"}
              width={150}
              height={30}
              alt="Dolope - logo"
            />
          </a>
        </$.Logo>
        <$.Nav>
          <ul>
            <li>
              <a href="#order">Postup objednávky</a>
            </li>
            <li>
              <a href="#visualization">Vizualizace</a>
            </li>
            <li>
              <a href="#faq">Časté dotazy</a>
            </li>
            <li>
              <a href="#team">My</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </$.Nav>
        <$.Button>Konfigurace skříně</$.Button>
      </$.HeaderContentDesktop>
      <$.HeaderContentMobile>
        <$.Logo>
          <a href="#header">
            <Image
              src={"/logos/dolope-logo.svg"}
              width={150}
              height={30}
              alt="Dolope - logo"
            />
          </a>
        </$.Logo>
        <$.BurgerMenu onClick={showMobileNavHandle}>
          <$.Logo>
            <Image
              src={"/icons/burger-menu.svg"}
              width={40}
              height={40}
              alt="Dolope - menu"
            />
          </$.Logo>
        </$.BurgerMenu>
      </$.HeaderContentMobile>
    </$.Header>
  );
};

export default Header;
