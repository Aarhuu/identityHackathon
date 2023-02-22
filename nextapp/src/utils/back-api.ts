export type Details = {
  currency: string;
  amount: number;
};

const getProductDetails = (amount: number): Details => {
  // Some magic to be done here to determine a final amount
  // For testing purposes just add 5 percent
  const finalAmount = amount * 100;
  return { currency: "EUR", amount: finalAmount };
};

const api = {
  getProductDetails,
};

export default api;
