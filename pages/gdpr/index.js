import Header from "@/layouts/gdpr/Header";
import Main from "@/layouts/gdpr/Main";
import GDPRsk from "../../components/gdpr/GDPRsk";
import GDPRcz from "../../components/gdpr/GDPRcz";
const language = process.env.NEXT_PUBLIC_LANGUAGE;

const Content = language === "cz" ? GDPRcz : GDPRsk;

const GDPR = () => {
  return (
    <>
      <Header />
      <Main>
        <Content />
      </Main>
    </>
  );
};

export default GDPR;
