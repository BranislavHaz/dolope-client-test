export const postOrder = async (orderData) => {
  const postSetting = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
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
    console.log("Request was successful");
    return true;
  } catch (error) {
    console.error("Network error:", error);
    return false;
  }
};
