import skLocale from "@/pages/konfigurator/locales/sk.json";
import czLocale from "@/pages/konfigurator/locales/cz.json";

const language = process.env.NEXT_PUBLIC_LANGUAGE;
const translations = language === "cz" ? czLocale : skLocale;

const sendPurchaseEvent = (orderData, orderId) => {
  const consents = window.CookieConsent.consent;

  if (window.dataLayer && consents.statistics && consents.marketing) {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
      event: "purchase",
      ecommerce: {
        transaction_id: orderId,
        value: orderData.price,
        currency: orderData.currency,
        items: [
          {
            item_id: "0001",
            item_name: translations.custom_event.item_name,
            item_brand: "Dolope",
            price: orderData.price,
            quantity: 1,
          },
        ],
      },
      userData: {
        firstName: orderData.firstName,
        lastName: orderData.lastName,
        email: orderData.email,
        phone: orderData.phone,
        city: orderData.city,
        zip: orderData.zip,
      },
    });
  }
};

export const postOrder = async (orderData) => {
  const postSetting = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  };

  try {
    const response = await fetch(
      `https://dolope-6771.rostiapp.cz/orders/send-order`,
      postSetting
    );
    if (!response.ok) {
      console.error("Request failed");
      return false;
    }
    const data = await response.json(); // Extrahovanie JSON dát z odpovede
    const orderId = data.contactId; // Získanie orderId z odpovede
    console.log("Request was successful");
    sendPurchaseEvent(orderData, orderId);
    return true;
  } catch (error) {
    console.error("Network error:", error);
    return false;
  }
};
