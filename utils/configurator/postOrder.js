import skLocale from "@/locales/konfigurator/sk.json";
import czLocale from "@/locales/konfigurator/cz.json";

const language = process.env.NEXT_PUBLIC_LANGUAGE;
const translations = language === "cz" ? czLocale : skLocale;

const sendPurchaseEvent = (orderData, orderId) => {
  // Získanie údajov o súhlase z CookieScriptConsent
  const consentData = JSON.parse(localStorage.getItem("CookieScriptConsent"));

  // Skontrolujeme, či sú povolené kategórie "performance" a "targeting"
  if (consentData && window.dataLayer) {
    const hasPerformanceConsent =
      consentData.categories.includes("performance");
    const hasTargetingConsent = consentData.categories.includes("targeting");

    // Ak používateľ súhlasil so štatistikami a marketingom (performance a targeting)
    if (hasPerformanceConsent && hasTargetingConsent) {
      dataLayer.push({ ecommerce: null }); // Vymazanie predchádzajúceho ecommerce objektu
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
    } else {
      console.log(
        "Necessary consents not provided for performance or targeting."
      );
    }
  } else {
    console.log("No consent data available or dataLayer not present.");
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
    const orderId = data.orderId; // Získanie orderId z odpovede
    console.log("Request was successful");
    sendPurchaseEvent(orderData, orderId);
    return true;
  } catch (error) {
    console.error("Network error:", error);
    return false;
  }
};
