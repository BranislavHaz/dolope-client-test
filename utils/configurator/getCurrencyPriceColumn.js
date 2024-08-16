export const getCurrencyPriceColumn = () => {
  return process.env.NEXT_PUBLIC_LANGUAGE === "cz"
    ? "price_vat_czk"
    : "price_vat_eur";
};
