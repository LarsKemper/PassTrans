import asyncHandler from "express-async-handler";
import { TransferDto, TransferViewDto } from "../shared/types/Transfer";
import Transfer from "../models/Transfer";

// @DESC Create Password Transfer
// @ROUTE /api/v1/transfer
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

// @DESC Get Password Transfer
// @ROUTE /api/transfer
// @METHOD GET
export const getTransfer = asyncHandler(async (req, res): Promise<void> => {
  console.log(req.params.accessId);

  const transfer: TransferDto | null = await Transfer.findOne({
    accessId: req.params.accessId,
  });

  if (!transfer) {
    res.status(404).json({ message: "Transfer not found!" });
    return;
  }

  const transferViewDto: TransferViewDto = {
    id: transfer._id,
    accessId: transfer.accessId,
    creatorIP: transfer.creatorIP,
    visitorIP: transfer.visitorIP,
    password: transfer.password,
    expirationDate: transfer.expirationDate,
  };

  res.status(202).json({ success: true, data: transferViewDto });
});
