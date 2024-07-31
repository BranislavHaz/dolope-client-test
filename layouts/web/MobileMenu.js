import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/web/layouts/MobileMenu.styled";

const MobileMenu = () => {
  const { isMobileMenuActive, setIsMobileMenuActive } = useMainStore(
    (state) => ({
      isMobileMenuActive: state.isMobileMenuActive,
      setIsMobileMenuActive: state.setIsMobileMenuActive,
    })
  );

  const closeMobileNavHandle = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <$.MobileMenu $isActive={isMobileMenuActive}>
      <$.CloseMenuButton onClick={closeMobileNavHandle}>
        <Image
          src={"/icons/close-menu.svg"}
          width={40}
          height={40}
          alt="Dolope - menu"
        />
      </$.CloseMenuButton>
      <$.MobileMenuContent>
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
        <$.ContactInfo>
          <p>
            Tel: <a href="tel:+420123456789">+420 123 456 789</a>
          </p>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </$.ContactInfo>
        <$.ActionButton>Konfigurace skříně</$.ActionButton>
      </$.MobileMenuContent>
    </$.MobileMenu>
  );
};

export default MobileMenu;
