import type { NextApiRequest, NextApiResponse } from "next";
import api, { Details } from "@/utils/back-api";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Details | string>
) {
  if (req.method !== "POST") {
    res.status(405).send("Method not supported");
  }

  const body = req.body;
  const amount = Number.parseInt(body.amount);

  const details = api.getProductDetails(amount);
  res.status(200).json(details);
}
