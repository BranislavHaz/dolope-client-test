import { useEffect, useState, useRef } from "react";
import Container from "@/components/Container";
import Img from "@/components/Img";
import Button from "@/components/Button";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/layouts/web/Header.styled";

const Header = ({ translations: t }) => {
  const { isMobileMenuActive, setIsMobileMenuActive } = useMainStore(
    (state) => ({
      isMobileMenuActive: state.isMobileMenuActive,
      setIsMobileMenuActive: state.setIsMobileMenuActive,
    })
  );

  useEffect(() => {
    if (isMobileMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuActive]);

  const showMobileNavHandle = () => {
    setIsMobileMenuActive(true);
  };

  const closeMobileNavHandle = () => {
    setIsMobileMenuActive(false);
  };

  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const initialTopOffset = stickyRef.current.offsetTop;

    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        const sticky = window.scrollY > initialTopOffset && rect.top <= 0;
        setIsSticky(sticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <$.Header id="header" ref={stickyRef} $isSticky={isSticky}>
      <Container>
        <$.HeaderContentDesktop>
          <$.Logo>
            <a href="/">
              <Img
                src={"/logos/dolope-logo.svg"}
                width={150}
                height={30}
                alt={t.alt_img_logo}
              />
            </a>
          </$.Logo>
          <$.Nav>
            <ul>
              <li>
                <a href="/#order">{t.order}</a>
              </li>
              <li>
                <a href="/#visualization">{t.visualization}</a>
              </li>
              <li>
                <a href="/#faq">{t.faq}</a>
              </li>
              <li>
                <a href="/#team">{t.team}</a>
              </li>
              <li>
                <a href="/#contact">{t.contact}</a>
              </li>
            </ul>
          </$.Nav>
          <Button primary lg href="/konfigurator">
            {t.action_button}
          </Button>
        </$.HeaderContentDesktop>
      </Container>
      <$.HeaderContentMobile>
        <$.Logo>
          <a href="/">
            <Img
              src={"/logos/dolope-logo.svg"}
              width={150}
              height={30}
              alt="Dolope - logo"
            />
          </a>
        </$.Logo>
        {!isMobileMenuActive && (
          <$.BurgerMenu onClick={showMobileNavHandle}>
            <$.Logo>
              <Img
                src={"/icons/burger-menu.svg"}
                width={40}
                height={40}
                alt={t.alt_img_burger}
              />
            </$.Logo>
          </$.BurgerMenu>
        )}
        {isMobileMenuActive && (
          <$.BurgerMenu onClick={closeMobileNavHandle}>
            <$.Logo>
              <Img
                src={"/icons/close-menu.svg"}
                width={40}
                height={40}
                alt={t.alt_img_burger}
              />
            </$.Logo>
          </$.BurgerMenu>
        )}
      </$.HeaderContentMobile>
    </$.Header>
  );
};

export default Header;
