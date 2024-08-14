import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/web/layouts/MobileMenu.styled";

const MobileMenu = ({ translations: t }) => {
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
          <li onClick={closeMobileNavHandle}>
            <a href="#order">{t.menu_order}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#visualization">{t.menu_visualization}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#faq">{t.menu_faq}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#team">{t.menu_team}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#contact">{t.menu_contact}</a>
          </li>
        </ul>
        <$.ContactInfo>
          <p>
            Tel: <a href={`tel:${t.phone}`}>{t.phone}</a>
          </p>
          <p>
            Email: <a href={`mailto:${t.email}`}>{t.email}</a>
          </p>
        </$.ContactInfo>
        <$.ActionButton>{t.menu_action_button}</$.ActionButton>
      </$.MobileMenuContent>
    </$.MobileMenu>
  );
};

export default MobileMenu;
