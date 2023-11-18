import { useEffect } from "react";
import Head from "next/head";

import Modal from "@/components/steps/Modal";
import Header from "@/layouts/configurator/Header";
import WardrobeView from "@/layouts/configurator/WardrobeView";
import WardrobeConfig from "@/layouts/configurator/WardrobeConfig";
import Footer from "@/layouts/configurator/Footer";

import useMainStore from "@/stores/useMainStore";
import { fetchProducts } from "@/utils/fetchProducts";

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

const Index = ({ products }) => {
  const { setProductsApi } = useMainStore((state) => ({
    setProductsApi: state.setProductsApi,
  }));

  useEffect(() => {
    setProductsApi(products);
  }, [products]);

  return (
    <>
      <Head>
        <title>Nakonfigurujte si vlastnu skriňu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal />
      <Header />
      <WardrobeView />
      <WardrobeConfig />
      <Footer />
    </>
  );
};

export default Index;
