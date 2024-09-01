import MobileMenu from "@/layouts/web/MobileMenu";
import Header from "@/layouts/web/Header";
import Footer from "@/layouts/web/Footer";

const Content = ({ children, translations: t }) => {
  return (
    <>
      <MobileMenu translations={t.header} />
      <Header translations={t.header} />
      <main>{children}</main>
      <Footer translations={t.footer} />
    </>
  );
};

export default Content;
