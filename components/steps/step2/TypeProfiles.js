import { useState } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";

import * as $ from "@/styles/components/steps/step2/TypeProfiles.styled";

const colorMapping = {
  silver: "stříbrná",
  black: "černá matná",
  white: "bílá lesklá",
  champagne: "šampaň",
};

const TypeProfiles = () => {
  const { doors, setSelectedProfile } = useMainStore((state) => ({
    doors: state.doors,
    setSelectedProfile: state.setSelectedProfile,
  }));

  const [profileState, setProfileState] = useState(doors.selectedProfile);

  const handleSelectChange = (e) => {
    const value = JSON.parse(e.target.value);
    const handle = value.handle.replace(/ü/g, "u").toLowerCase();
    const color = value.color;

    if (value.title === "London") {
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

  const handleClickProfile = (handle) => {
    setProfileState({ handle, color: undefined });
  };

  const handleClickColor = (color) => {
    setProfileState({ ...profile, color: color });
  };

  const getAvailableColors = () => {
    const colors = ["silver", "white", "black", "champagne"];

    return doors.availableProfiles.flatMap((profile) => {
      /* return profile.colors.map((color) => {}); */
      return colors.map((color) => {
        return (
          <$.ColorElement $isAvailable={profile.colors.includes(color)}>
            <Image
              src={`./images/profiles/${color}-profile.png`}
              width={100}
              height={100}
            />

            <div>{colorMapping[color]}</div>
          </$.ColorElement>
        );
      });
    });

    /*     return colors.map((color) => {
      return (
        <$.ColorElement $isAvailable={doors}>
          <Image
            src={`./images/profiles/${color}-profile.png`}
            width={100}
            height={100}
          />

          <div>{colorMapping[color]}</div>
        </$.ColorElement>
      );
    }); */
  };

  const createOptions = () => {
    return doors.availableProfiles.flatMap((profile) => {
      const profileName = profile.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      return (
        <$.ProfileElement
          $isActive={profileName === profileState.handle}
          onClick={() => handleClickProfile(profileName)}
        >
          {
            <Image
              src={`./images/profiles/${profileName}-profile.jpg`}
              width={100}
              height={100}
            />
          }
          <div>{profile.name}</div>
        </$.ProfileElement>
      );

      /*       return profile.colors.map((color) => {
        const type = profile.name + " - " + colorMapping[color];
        return (
          <>
            {
              <Image
                src={`./images/profiles/${profileName}-profile.jpg`}
                width={100}
                height={100}
              />
            }
            <div>{type}</div>
          </>
        );
      }); */
    });
  };

  return (
    <$.Wrap>
      <Title>Typ profilu</Title>
      <$.TypeProfilesWrap>{createOptions()}</$.TypeProfilesWrap>
      <Title>Barva profilu</Title>
      <$.ColorProfilesWrap>{getAvailableColors()}</$.ColorProfilesWrap>
    </$.Wrap>
  );
};

export default TypeProfiles;
