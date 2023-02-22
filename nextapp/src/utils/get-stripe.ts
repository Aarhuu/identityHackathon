import stripeLib from "stripe";

// eslint-disable-next-line
// @ts-ignore
const stripe = stripeLib(process.env.STRIPE_SECRET_KEY!);

const getStripe = () => {
  return stripe;
};

export default getStripe;
