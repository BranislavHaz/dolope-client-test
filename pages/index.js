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

const Home = ({ translations: t }) => {
  return (
    <>
      <Head>
        <title>{`Dolope | ${t.title}`}</title>
        <meta name="description" content={t.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileMenu translations={t.content} />
      <Header translations={t.content} />
      <Hero />
      <Benefits />
      <OrderSection />
      <VisualizationSection />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
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
  const slug = "index";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/page?language=${language}&slug=${slug}`,
    fetchSetting
  );
  const translations = await res.json();

  return {
    props: {
      translations,
    },
  };
}

export default Home;
