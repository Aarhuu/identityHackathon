import type { NextApiRequest, NextApiResponse } from "next";
import api, { Details } from "../../utils/back-api";
import getStripe from "@/utils/get-stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const stripe = getStripe();
  const body = req.body;
  const amount = Number.parseInt(body.amount);
  const productDetails = api.getProductDetails(amount);
  const options = {
    ...body,
    amount: productDetails.amount,
    currency: productDetails.currency,
  };
  try {
    const paymentIntent = await stripe.paymentIntents.create(options);
    res.json(paymentIntent);
  } catch (err) {
    res.json(err);
  }
}
