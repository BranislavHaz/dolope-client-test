import Home from ".";
import skHome from "@/locales/web/homepage/sk.json";
import czHome from "@/locales/web/homepage/cz.json";

const components = { Home };

const sitesSK = [{ id: "konfiguratorko", name: "Home", translations: skHome }];
const sitesCZ = [{ id: "konfigurace", name: "Home", translations: czHome }];

const posts = process.env.NEXT_PUBLIC_LANGUAGE === "sk" ? sitesSK : sitesCZ;

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({ post }) {
  const componentName = post.name;
  const Component = components[componentName];

  return <Component translations={post.translations} />;
}
