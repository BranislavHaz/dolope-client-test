import useMainStore from "@/stores/useMainStore";
import Button from "@/components/Button";
import * as $ from "@/styles/layouts/web/MobileMenu.styled";

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
      <$.MobileMenuContent>
        <ul>
          <li onClick={closeMobileNavHandle}>
            <a href="/#order">{t.order}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="/#visualization">{t.visualization}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="/#faq">{t.faq}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="/#team">{t.team}</a>
          </li>
          <li onClick={closeMobileNavHandle}>
            <a href="/#contact">{t.contact}</a>
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

        <Button primary xl href="/konfigurator">
          {t.action_button}
        </Button>
      </$.MobileMenuContent>
    </$.MobileMenu>
  );
};

export default MobileMenu;
