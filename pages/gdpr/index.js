import Head from "next/head";
import Content from "@/layouts/web/Content";
import GDPRsk from "@/components/web/gdpr/GDPRsk";
import GDPRcz from "@/components/web/gdpr/GDPRsk";

import skLocale from "@/locales/web/gdpr/sk.json";
import czLocale from "@/locales/web/gdpr/cz.json";
import skLayout from "@/locales/layouts/web/sk.json";
import czLayout from "@/locales/layouts/web/cz.json";

const language = process.env.NEXT_PUBLIC_LANGUAGE;
const ContentText = language === "cz" ? GDPRcz : GDPRsk;
const translate = language === "cz" ? czLocale : skLocale;

const GDPR = ({ translationsLayout }) => {
  return (
    <>
      <Head>
        <title>{`Dolope | ${translate.title}`}</title>
        <meta name="description" content={translate.meta_description} />
      </Head>
      <Content translations={translationsLayout}>
        <ContentText />
      </Content>
    </>
  );
};

export async function getStaticProps() {
  const language = process.env.NEXT_PUBLIC_LANGUAGE;
  const translationsLayout = language === "cz" ? czLayout : skLayout;

  return {
    props: {
      translationsLayout,
    },
  };
}

export default GDPR;
