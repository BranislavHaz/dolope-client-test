import { useState, useEffect } from "react";
import Image from "next/image";
import useTimeout from "@/hooks/useTimeout";
import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";
import SubmitButton from "../ui/SubmitButton";

import * as $ from "@/styles/components/steps/step2/TypeProfiles.styled";

const colorMapping = {
  silver: "stříbrná",
  black: "černá matná",
  white: "bílá lesklá",
  champagne: "šampaň",
};

const TypeProfiles = () => {
  const {
    doors,
    setSelectedProfile,
    setStepsInputs,
    setIsModalActive,
    stepsInputs,
  } = useMainStore((state) => ({
    doors: state.doors,
    setSelectedProfile: state.setSelectedProfile,
    setStepsInputs: state.setStepsInputs,
    setIsModalActive: state.setIsModalActive,
    stepsInputs: state.stepsInputs,
  }));

  const set = useTimeout();
  const availableProfiles = doors.availableProfiles;
  const activeProfileObj = doors.selectedProfile;
  const activeProfile = doors.selectedProfile.handle;
  const activeColor = doors.selectedProfile.color;
  // Získanie unikátnych farieb zo všetkých miest
  const allColors = Array.from(
    new Set(availableProfiles.flatMap((profile) => profile.colors))
  );

  const [availableColors, setAvailableColors] = useState([]);

  useEffect(() => {
    const profile = availableProfiles.find(
      (p) =>
        p.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase() === doors.selectedProfile.handle.toLowerCase()
    );
    if (profile) {
      setAvailableColors(profile.colors);
    } else {
      setAvailableColors([]);
    }
  }, [doors.selectedProfile.handle]);

  /* Generovanie Elementov */
  const generateProfiles = () => {
    return availableProfiles.map((profile) => {
      const profileName = profile.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      return (
        <$.ProfileElement
          key={profile.name}
          onClick={() => handleClickProfile(profileName)}
        >
          <$.ProfileElementImg $isActive={profileName === activeProfile}>
            <Image
              src={`./images/profiles/${profileName}-profile.jpg`}
              width={100}
              height={100}
            />
          </$.ProfileElementImg>
          <div>{profile.name}</div>
        </$.ProfileElement>
      );
    });
  };

  const generateColors = () => {
    return allColors.map((color) => (
      <$.ColorElement key={color} onClick={() => handleClickColor(color)}>
        <$.ColorElementImg
          $isAvailable={availableColors.includes(color)}
          $isActive={color === activeColor}
        >
          <Image
            src={`./images/profiles/${color}-profile.png`}
            width={100}
            height={100}
          />
        </$.ColorElementImg>
        <div>{colorMapping[color]}</div>
      </$.ColorElement>
    ));
  };

  /* Handle click akcie */
  const handleClickProfile = (profileName) => {
    const typeWheel = profileName === "london" ? "asymmetric" : "symmetric";
    setStepsInputs("step2", "typeProfiles", false);
    setSelectedProfile({
      handle: profileName,
      color: "unfilled",
      wheels: typeWheel,
    });
  };

  const handleClickColor = (color) => {
    if (availableColors.includes(color) && activeProfile !== "unfilled") {
      setStepsInputs("step2", "typeProfiles", true);
      setSelectedProfile({ ...activeProfileObj, color });
    }
  };

  const handleSubmit = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <$.Wrap>
        <Title>Typ profilu</Title>
        <$.TypeProfilesWrap>{generateProfiles()}</$.TypeProfilesWrap>
        <Title>Barva profilu</Title>
        <$.ColorProfilesWrap>{generateColors()}</$.ColorProfilesWrap>
      </$.Wrap>
      <SubmitButton
        isVisible={stepsInputs.step2.typeProfiles}
        submitAction={handleSubmit}
      />
    </>
  );
};

export default TypeProfiles;
