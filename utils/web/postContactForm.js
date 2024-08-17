const sendCustomEvent = (formData) => {
  const consents = window.CookieConsent.consent;

  if (window.dataLayer && consents.statistics && consents.marketing) {
    // Bezpečné rozdelenie fullName
    const fullName = formData.fullName || "";
    const [firstName, lastName] = fullName.split(" ");

    const { email, phone } = formData;

    window.dataLayer.push({
      event: "generate_lead",
      userData: {
        firstName,
        lastName,
        email,
        phone,
      },
    });
  }
};

export const postContactForm = async (formData, setContactStatus) => {
  const postSetting = {
    method: "POST",
    body: formData, // FormData objekt
  };

  try {
    const response = await fetch(
      `https://dolope-6771.rostiapp.cz/contact/send-contact`,
      postSetting
    );
    if (!response.ok) {
      console.error("Request failed");
      return false;
    }
    console.log("Request was successful");
    setContactStatus(true); // Nastavenie contactStatus na true
    sendCustomEvent(formData);
    return true;
  } catch (error) {
    console.error("Network error:", error);
    return false;
  }
};
