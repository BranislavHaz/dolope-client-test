import Head from "next/head";
import MobileMenu from "@/layouts/web/MobileMenu";
import Header from "@/layouts/web/Header";
import Hero from "@/layouts/web/Hero";
import Main from "@/layouts/web/Main";
import Footer from "@/layouts/web/Footer";

import skLocale from "@/locales/index/sk.json";
import czLocale from "@/locales/index/cz.json";

const Home = ({ translations: t }) => {
  return (
    <>
      <Head>
        <title>{`Dolope | ${t.title}`}</title>
        <meta name="description" content={t.meta_description} />
      </Head>
      <MobileMenu translations={t.content.menu} />
      <Header translations={t.content.menu} />
      <Hero translations={t.content.hero} />
      <Main translations={t.content} />
      <Footer translations={t.content.footer} />
    </>
  );
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
