import { useState, useEffect } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";

import toast from "react-hot-toast";

import * as $ from "@/styles/configurator/components/steps/step2/TypeProfiles.styled";

const TypeProfiles = ({ setHandleSubmit, translations: t }) => {
  const {
    doors,
    setSelectedProfile,
    setStepsInputs,
    setIsModalActive,
    stepsInputs,
  } = useMainStore((state) => ({
    doors: state.doors,
    setSelectedProfile: state.setSelectedProfile,
    stepsInputs: state.stepsInputs,
    setStepsInputs: state.setStepsInputs,
    setIsModalActive: state.setIsModalActive,
  }));

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
          $isActive={profileName === activeProfile}
          onClick={() => handleClickProfile(profileName)}
        >
          <$.ProfileElementImg>
            <Image
              src={`./images/profiles/${profileName}-profile.jpg`}
              width={100}
              height={100}
              alt={`${t.handles.alt_img} - ${profileName}`}
            />
          </$.ProfileElementImg>
          <div>{profile.name}</div>
        </$.ProfileElement>
      );
    });
  };

  const colorMapping = {
    silver: t.colors.color.silver,
    black: t.colors.color.black,
    white: t.colors.color.white,
    champagne: t.colors.color.champagne,
  };

  const generateColors = () => {
    return allColors.map((color) => (
      <$.ColorElement
        key={color}
        $isActive={color === activeColor}
        onClick={() => handleClickColor(color)}
      >
        <$.ColorElementImg $isAvailable={availableColors.includes(color)}>
          <Image
            src={`./images/profiles/${color}-profile.png`}
            width={100}
            height={100}
            alt={`${t.colors.alt_img} - ${color}`}
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
      toast.success(t.toast.success, {
        className: "larger-device",
      });
    }
  };

  const handleSubmit = () => {
    if (stepsInputs.step2.typeProfiles) {
      setIsModalActive(false);
      toast.success(t.toast.success, {
        className: "small-device",
      });
    } else {
      toast.error(t.toast.error, {
        className: "small-device",
      });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [stepsInputs.step2.typeProfiles]);

  return (
    <>
      <$.Wrap>
        <Title>{t.handles.title}</Title>
        <$.TypeProfilesWrap>{generateProfiles()}</$.TypeProfilesWrap>
        <Title>{t.colors.title}</Title>
        <$.ColorProfilesWrap>{generateColors()}</$.ColorProfilesWrap>
      </$.Wrap>
    </>
  );
};

export default TypeProfiles;
