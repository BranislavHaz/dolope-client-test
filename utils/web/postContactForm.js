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
    return true;
  } catch (error) {
    console.error("Network error:", error);
    return false;
  }
};
