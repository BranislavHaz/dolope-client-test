import { useState } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";

import * as $ from "@/styles/components/steps/step2/TypeProfiles.styled";
import { SubmitButton } from "@/styles/components/steps/ui/SubmitButton.styled";

const colorMapping = {
  silver: "stříbrná",
  black: "černá matná",
  white: "bílá lesklá",
  champagne: "šampaň",
};

const doorsAvailableProfiles = [
  { name: "Berlin", colors: ["silver", "white", "black"] },
  { name: "London", colors: ["silver", "white", "black"] },
  { name: "Paris", colors: ["champagne", "white", "black"] },
  { name: "Wien", colors: ["champagne", "white", "silver"] },
  { name: "Zürich", colors: ["champagne", "white", "silver"] },
];

const TypeProfiles = () => {
  const { doors, setSelectedProfile, setStepsInputs, setIsModalActive } =
    useMainStore((state) => ({
      doors: state.doors,
      setSelectedProfile: state.setSelectedProfile,
      setStepsInputs: state.setStepsInputs,
      setIsModalActive: state.setIsModalActive,
    }));

  const [activeProfile, setActiveProfile] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [availableColors, setAvailableColors] = useState([]);

  // Získanie unikátnych farieb zo všetkých miest
  const allColors = Array.from(
    new Set(doorsAvailableProfiles.flatMap((profile) => profile.colors))
  );

  const handleSelectChange = (color) => {
    const handle = activeProfile
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    if (activeProfile === "London") {
      setSelectedProfile({
        handle,
        color,
        wheels: "asymmetric",
      });
    } else {
      setSelectedProfile({
        handle,
        color,
        wheels: "symmetric",
      });
    }
  };

  const handleClickProfile = (profileName) => {
    setActiveProfile(profileName);
    setActiveColor(null);
    setStepsInputs("step2", "typeProfiles", false);
    setSelectedProfile({
      handle: "unfilled",
      color: "silver",
      wheels: "symmetric",
    });

    if (profileName) {
      const profile = doorsAvailableProfiles.find(
        (c) => c.name === profileName
      );
      if (profile) {
        setAvailableColors(profile.colors);
      }
    } else {
      setAvailableColors([]);
    }
  };

  const generateProfiles = () => {
    return doorsAvailableProfiles.map((profile) => {
      const profileName = profile.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      return (
        <$.ProfileElement
          key={profile.name}
          onClick={() => handleClickProfile(profile.name)}
        >
          <$.ProfileElementImg $isActive={profile.name === activeProfile}>
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

  const handleClickColor = (color) => {
    if (availableColors.includes(color) && activeProfile) {
      setActiveColor(color);
      handleSelectChange(color);
      setStepsInputs("step2", "typeProfiles", true);
      setIsModalActive(false);
    }
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

  return (
    <$.Wrap>
      <Title>Typ profilu</Title>
      <$.TypeProfilesWrap>{generateProfiles()}</$.TypeProfilesWrap>
      <Title>Barva profilu</Title>
      <$.ColorProfilesWrap>{generateColors()}</$.ColorProfilesWrap>
    </$.Wrap>
  );
};

export default TypeProfiles;
