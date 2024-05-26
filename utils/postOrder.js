export const postOrder = (orderData) => {
  console.log(orderData);
  const postSetting = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    },
    body: JSON.stringify(orderData),
  };

  fetch(`http://localhost:8080/orders/send-order`, postSetting)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
