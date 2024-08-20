import Benefits from "@/components/web/Benefits";
import OrderSection from "@/components/web/OrderSection";
import VisualizationSection from "@/components/web/VisualizationSection";
import FAQ from "@/components/web/FAQ";
import Team from "@/components/web/Team";
import Contact from "@/components/web/Contact";

const Main = ({ translations: t }) => {
  return (
    <main>
      <Benefits translations={t.benefits} />
      <OrderSection translations={t.order} />
      <VisualizationSection translations={t.visualization} />
      <FAQ translations={t.faq} />
      <Team translations={t.team} />
      <Contact translations={t.contact} />
    </main>
  );
};

export default Main;
