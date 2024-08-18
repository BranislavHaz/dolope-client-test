const sendCustomEvent = (formData, contactId) => {
  const consents = window.CookieConsent.consent;

  if (window.dataLayer && consents.statistics && consents.marketing) {
    // Získanie údajov z formData
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const userData = {
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      contactId,
    };

    window.dataLayer.push({
      event: "generate_lead",
      userData,
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
    const data = await response.json(); // Extrahovanie JSON dát z odpovede
    const contactId = data.contactId; // Získanie contactId z odpovede
    console.log("Request was successful");
    setContactStatus(true); // Nastavenie contactStatus na true
    sendCustomEvent(formData, contactId); // Pridanie contactId ako parameter
    return true;
  } catch (error) {
    console.error("Network error:", error);
    return false;
  }
};
