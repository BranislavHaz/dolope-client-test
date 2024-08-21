import Head from "next/head";
import Header from "@/layouts/gdpr/Header";
import Main from "@/layouts/gdpr/Main";
import GDPRsk from "../../components/gdpr/GDPRsk";
import GDPRcz from "../../components/gdpr/GDPRcz";
import skLocale from "@/locales/gdpr/sk.json";
import czLocale from "@/locales/gdpr/cz.json";
const language = process.env.NEXT_PUBLIC_LANGUAGE;

const Content = language === "cz" ? GDPRcz : GDPRsk;
const translate = language === "cz" ? czLocale : skLocale;

const GDPR = () => {
  return (
    <>
      <Head>
        <title>{`Dolope | ${translate.title}`}</title>
        <meta name="description" content={translate.meta_description} />
      </Head>
      <Header />
      <Main>
        <Content />
      </Main>
    </>
  );
};

export default GDPR;
