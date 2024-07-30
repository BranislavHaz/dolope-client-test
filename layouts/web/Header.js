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
              <a href="#">Co nás pohání</a>
            </li>
            <li>
              <a href="#">Co děláme jinak</a>
            </li>
            <li>
              <a href="#">Zkontaktujte se s námi</a>
            </li>
          </ul>
        </$.Nav>
        <$.Button>
          <Image
            src={"/icons/config.svg"}
            width={15}
            height={15}
            alt="Konfigurátor ikona"
          />
          konfigurace skříně
        </$.Button>
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
