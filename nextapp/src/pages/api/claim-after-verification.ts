import type { NextApiRequest, NextApiResponse } from "next";
import { release } from "@/utils/ethFunctions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | string>
) {
  if (req.method !== "POST") {
    res.status(405).send("Method not supported");
  }

  const body = req.body;
  const recipient = body.recipient;

  await release(recipient);
  res.status(200).json({ message: "ok" });
}
