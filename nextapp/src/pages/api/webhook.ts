import type { NextApiRequest, NextApiResponse } from "next";
import getStripe from "@/utils/get-stripe";
import type { Readable } from "node:stream";
import { sendTokens } from "@/utils/ethFunctions";

type Data = {
  message: string;
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const stripe = getStripe();
  const buf = await buffer(req);
  const rawBody = buf.toString("utf8");
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_KEY) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    const signature = req.headers["stripe-signature"];
    console.log(signature, process.env.STRIPE_WEBHOOK_KEY);
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_KEY
      );
    } catch (err) {
      console.log(`⚠️ Webhook signature verification failed.`);
      return res.status(400).json({ message: "verification failed" });
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }
  console.log(eventType);
  console.log(data);
  if (eventType === "payment_intent.succeeded") {
    // Fulfill any orders, e-mail receipts, etc
    console.log("💰 Payment received!");

    await sendTokens(data.object.description, data.object.amount * 10000);
  }
  if (eventType === "payment_intent.payment_failed") {
    // Notify the customer that their order was not fulfilled
    console.log("❌ Payment failed.");
  }
  res.status(200).json({ message: "ok" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
