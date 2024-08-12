import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/web/layouts/MobileMenu.styled";

import skLocales from "@/public/locales/sk/homepage.json";
import czLocales from "@/public/locales/cz/homepage.json";

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

  const language = process.env.LANGUAGE;
  const t = language === "sk" ? skLocales : czLocales;

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
          <li onClick={closeMobileNavHandle}>
            <a href="#order">{t.mobile_menu_order_process}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#visualization">Vizualizace</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#faq">Časté dotazy</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#team">Proč to děláme</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#contact">Kontakt</a>
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
