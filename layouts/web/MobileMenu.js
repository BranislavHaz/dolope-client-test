import Image from "next/image";
import Link from "next/link";
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
          alt={t.alt_img_burger}
        />
      </$.CloseMenuButton>
      <$.MobileMenuContent>
        <ul>
          <li onClick={closeMobileNavHandle}>
            <a href="#order">{t.order}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#visualization">{t.visualization}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#faq">{t.faq}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#team">{t.team}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="#contact">{t.contact}</a>
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
        <Link href="/konfigurator">
          <$.ActionButton>{t.action_button}</$.ActionButton>
        </Link>
      </$.MobileMenuContent>
    </$.MobileMenu>
  );
};

export default MobileMenu;
