import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/configurator/layouts/WardrobeView.styled";

import Wardrobe from "@/components/configurator/elements/Wardrobe";

const WardrobeView = () => {
  const { currentStep } = useMainStore((state) => ({
    currentStep: state.currentStep,
  }));

  return (
    <$.WardrobeView>
      {currentStep.id === 1 && (
        <Image
          src={"/images/configurator/dolope-skrine-popis.png"}
          width={300}
          height={300}
          alt="Skříně - popis"
          priority
        />
      )}
      {currentStep.id !== 1 && <Wardrobe />}
    </$.WardrobeView>
  );
};

export default WardrobeView;
