import { TransferStatus } from "./../shared/enums/transferStatus.enum";
import asyncHandler from "express-async-handler";
import { TransferDto, TransferViewDto } from "../shared/types/Transfer";
import Transfer from "../models/Transfer";
import { isExpired } from "../services/isExpired.service";
import CryptoJS from "crypto-js";
import { sendMail } from "../services/mailer.service";
import { mailType } from "../shared/enums/mailTypes.enum";

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

  sendMail(
    mailType.CREATED,
    transfer.email,
    transfer.accessId,
    transfer.status
  );

  res.status(201).json({
    success: true,
    data: transfer,
  });
});

// @DESC Get Password Transfer
// @ROUTE /api/transfer
// @METHOD GET
export const getTransfer = asyncHandler(async (req, res): Promise<void> => {
  const transfer: TransferDto | null = await Transfer.findOne({
    accessId: req.params.accessId,
  });

  if (!transfer || transfer.status === TransferStatus.PENDING_FOR_DELETION) {
    res.status(404).json({ message: "Transfer not found!" });
    return;
  }

  if (
    isExpired(transfer.expirationDate) ||
    transfer.status === TransferStatus.EXPIRED
  ) {
    res.status(401).json({ message: "Transfer is expired!" });
    return;
  }

  if (transfer.status === TransferStatus.VIEWED) {
    res.status(401).json({ message: "Transfer was already viewed!" });
    return;
  }

  if (transfer.status === TransferStatus.BLOCKED) {
    res.status(401).json({ message: "Transfer was blocked!" });
    return;
  }

  const HASH_KEY: string = process.env.HASH_KEY as string;
  const decryptedHash = CryptoJS.AES.decrypt(
    transfer.password,
    HASH_KEY
  ).toString(CryptoJS.enc.Utf8);

  const transferViewDto: TransferViewDto = {
    id: transfer.id,
    accessId: transfer.accessId,
    status: transfer.status,
    creatorIP: transfer.creatorIP,
    visitorIP: transfer.visitorIP,
    password: decryptedHash,
    expirationDate: transfer.expirationDate,
    viewedDate: transfer.viewedDate,
  };

  res.status(202).json({ success: true, data: transferViewDto });
});

// @DESC set Transfer Viewed
// @ROUTE /api/transfer/setViewed
// @METHOD PUT
export const setTransferViewed = asyncHandler(
  async (req, res): Promise<void> => {
    let transfer: TransferDto | null = await Transfer.findOne({
      accessId: req.params.accessId,
    });

    if (!transfer) {
      res.status(404).json({ message: "Transfer not found!" });
      return;
    }

    const ip: string | string[] | undefined =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    transfer = await Transfer.findByIdAndUpdate(
      transfer.id,
      {
        visitorIP: transfer.visitorIP?.push(typeof ip === "string" ? ip : ""),
        viewedDate: new Date(),
        status: TransferStatus.VIEWED,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Transfer set viewed",
    });
  }
);
