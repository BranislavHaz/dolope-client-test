import Head from "next/head";
import MobileMenu from "@/layouts/web/MobileMenu";
import Header from "@/layouts/web/Header";
import Hero from "@/layouts/web/Hero";
import Benefits from "@/layouts/web/Benefits";
import OrderSection from "@/layouts/web/OrderSection";
import VisualizationSection from "@/layouts/web/VisualizationSection";
import FAQ from "@/components/web/FAQ";
import Team from "@/components/web/Team";
import Contact from "@/components/web/Contact";
import Footer from "@/layouts/web/Footer";

import skLocale from "@/pages/index/locales/sk.json";
import czLocale from "@/pages/index/locales/cz.json";

const Home = ({ translations: t }) => {
  return (
    <>
      <Head>
        <title>{`Dolope | ${t.title}`}</title>
        <meta name="description" content={t.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileMenu translations={t.content.menu} />
      <Header translations={t.content.menu} />
      <Hero translations={t.content.hero} />
      <Benefits translations={t.content.benefits} />
      <OrderSection translations={t.content.order} />
      <VisualizationSection translations={t.content.visualization} />
      <FAQ translations={t.content.faq} />
      <Team translations={t.content.team} />
      <Contact translations={t.content.contact} />
      <Footer translations={t.content.footer} />
    </>
  );
};

const fetchSetting = {
  method: "GET",
  headers: {
    authorization: process.env.AUTH_TOKEN,
  },
};

export async function getStaticProps() {
  const language = process.env.NEXT_PUBLIC_LANGUAGE;
  const translations = language === "cz" ? czLocale : skLocale;

  return {
    props: {
      translations,
    },
  };
}

export default Home;
