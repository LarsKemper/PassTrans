import asyncHandler from "express-async-handler";
import { TransferDto } from "../shared/types/Transfer";
import Transfer from "../models/Transfer";

// @DESC Create Password Transfer
// @ROUTE /api/v1/create-transfer
// @METHOD POST
export const createTransfer = asyncHandler(async (req, res): Promise<void> => {
  const idExist: TransferDto | null = await Transfer.findById(req.body.id);

  if (idExist) {
    res.status(500).json({ message: "Something gone wrong!" });
    return;
  }

  const ip: string | string[] | undefined =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const transfer: TransferDto = await Transfer.create({
    accessId: req.body.accessId,
    creatorIP: ip,
    visitorIP: undefined,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    expirationDate: req.body.expirationDate,
  });

  res.status(201).json({
    success: true,
    data: transfer,
  });
});
