import { useEffect } from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import Modal from "@/components/configurator/steps/Modal";
import ShowHideDoors from "@/components/configurator/steps/ui/ShowHideDoors";
import Header from "@/layouts/configurator/Header";
import WardrobeView from "@/layouts/configurator/WardrobeView";
import WardrobeConfig from "@/layouts/configurator/WardrobeConfig";
import Step4 from "@/components/configurator/steps/step4/Step4";
import Footer from "@/layouts/configurator/Footer";

import useMainStore from "@/stores/useMainStore";
import { fetchProducts } from "@/utils/configurator/fetchProducts";

import skLocale from "@/pages/konfigurator/locales/sk.json";
import czLocale from "@/pages/konfigurator/locales/cz.json";

import * as $ from "@/styles/configurator/pages/configurator/index.styled";

const Index = ({ products, translations: t }) => {
  const { viewport, setProductsApi, currentStep, setViewport } = useMainStore(
    (state) => ({
      viewport: state.viewport,
      setProductsApi: state.setProductsApi,
      currentStep: state.currentStep,
      setViewport: state.setViewport,
    })
  );

  useEffect(() => {
    setProductsApi(products);
  }, [products]);

  useEffect(() => {
    setViewport(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      [setViewport]
    );

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`Dolope | ${t.title}`}</title>
        <meta name="description" content={t.meta_description} />
      </Head>
      <Modal translations={t.modal} />
      {currentStep.id !== 4 && (
        <$.WrapContent>
          <Toaster />
          <$.WrapView $height={viewport.height}>
            <ShowHideDoors translations={t.show_hide_doors} />
            <Header translations={t.header} />
            <WardrobeView translations={t.wardrobe_view} />
          </$.WrapView>
          <$.WrapConfig $height={viewport.height}>
            <WardrobeConfig translations={t} />
            <Footer translations={t.footer} />
          </$.WrapConfig>
        </$.WrapContent>
      )}
      {currentStep.id === 4 && (
        <>
          <ShowHideDoors isLastStep={true} translations={t.show_hide_doors} />
          <Header translations={t.header} />
          <Step4 translations={t.steps.step4} />
        </>
      )}
    </>
  );
};

export async function getStaticProps() {
  const products = await fetchProducts();
  const language = process.env.NEXT_PUBLIC_LANGUAGE;
  const translations = language === "cz" ? czLocale : skLocale;

  return {
    props: {
      products,
      translations,
    },
  };
}

export default Index;
