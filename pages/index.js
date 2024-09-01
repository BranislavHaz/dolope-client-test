import Head from "next/head";
import Main from "@/layouts/web/Content";
import Hero from "@/components/web/homepage/Hero";
import OrderSteps from "@/components/web/homepage/OrderSteps";
import Visualisation from "@/components/web/homepage/Visualisation";
import FAQ from "@/components/web/homepage/FAQ";
import Team from "@/components/web/homepage/Team";
import Contact from "@/components/web/homepage/Contact";

import skLocale from "@/locales/web/homepage/sk.json";
import czLocale from "@/locales/web/homepage/cz.json";
import skLayout from "@/locales/layouts/web/sk.json";
import czLayout from "@/locales/layouts/web/cz.json";

const Homepage = ({ translations: t, translationsLayout }) => {
  return (
    <>
      <Head>
        <title>{`Dolope | ${t.title}`}</title>
        <meta name="description" content={t.meta_description} />
      </Head>
      <Main translations={translationsLayout}>
        <Hero translations={t.content.hero} />
        <OrderSteps translations={t.content.order} />
        <Visualisation translations={t.content.visualization} />
        <FAQ translations={t.content.faq} />
        <Team translations={t.content.team} />
        <Contact translations={t.content.contact} />
      </Main>
    </>
  );
};

export async function getStaticProps() {
  const language = process.env.NEXT_PUBLIC_LANGUAGE;
  const translations = language === "cz" ? czLocale : skLocale;
  const translationsLayout = language === "cz" ? czLayout : skLayout;

  return {
    props: {
      translations,
      translationsLayout,
    },
  };
}

export default Homepage;
