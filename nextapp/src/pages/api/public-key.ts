import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  publicKey: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY! });
}
