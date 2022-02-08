import { mailType } from "./../shared/enums/mailTypes.enum";
import { sendMail } from "./../services/mailer.service";
import { DashboardDto } from "./../shared/types/Dashboard";
import asyncHandler from "express-async-handler";
import Transfer from "../models/Transfer";
import { TransferDto, TransferType } from "../shared/types/Transfer";
import CryptoJS from "crypto-js";
import crypto from "crypto";

// @DESC Request Access to Transfer Dashboard Informations
// @ROUTE /api/dashboard/request
// @METHOD POST
export const requestDashboard = asyncHandler(
  async (req, res): Promise<void> => {
    const requestToken = crypto.randomBytes(20).toString("hex");
    const hash = crypto.createHash("sha256").update(requestToken).digest("hex");

    const transfer = await Transfer.findOne({
      accessId: req.body.accessId,
    });

    if (!transfer) {
      res.status(401).json({ message: "Transfer not found" });
      return;
    }

    transfer.requestCode = Math.floor(1000 + Math.random() * 9000);
    transfer.requestToken = hash;
    transfer.expiredRequestToken = new Date().setHours(
      new Date().getHours() + 1
    );
    await transfer.save();

    try {
      sendMail(
        mailType.VERIFICATION,
        transfer.email,
        transfer.accessId,
        transfer.requestCode
      );

      res
        .status(201)
        .json({ success: true, message: "Check your emails to continue" });
    } catch (err) {
      transfer.requestCode = undefined;
      transfer.requestToken = undefined;
      transfer.expiredRequestToken = undefined;
      await transfer.save({ validateBeforeSave: false });

      res.status(401).json({ message: "Something gone wrong" });
    }
    sendMail(
      mailType.VERIFICATION,
      transfer.email,
      transfer.accessId,
      transfer.status
    );
  }
);

// @DESC Get Transfer Dashboard Informations
// @ROUTE /api/dashboard
// @METHOD GET
export const getDashboard = asyncHandler(async (req, res): Promise<void> => {
  const transfer: TransferDto | null = await Transfer.findOne({
    accessId: req.params.accessId,
  });

  if (!transfer) {
    res.status(404).json({ message: "Transfer not found!" });
    return;
  }

  // TODO: Send Email to creator if ips are not matching!
  const ip: string | string[] | undefined =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (transfer.creatorIP === ip) {
    res.status(401).json({
      message:
        "You are currently not authorized. Check your email inbox if you are the creator!",
    });
    return;
  }

  const HASH_KEY: string = process.env.HASH_KEY as string;
  const decryptedHash = CryptoJS.AES.decrypt(
    transfer.password,
    HASH_KEY
  ).toString(CryptoJS.enc.Utf8);

  const transferDto: TransferDto = {
    id: transfer.id,
    accessId: transfer.accessId,
    status: transfer.status,
    creatorIP: transfer.creatorIP,
    visitorIP: transfer.visitorIP,
    firstName: transfer.firstName,
    lastName: transfer.lastName,
    email: transfer.email,
    password: decryptedHash,
    country: transfer.country,
    expirationDate: transfer.expirationDate,
    viewedDate: transfer.viewedDate,
    statusUpdated: transfer.statusUpdated,
  };

  res.status(202).json({ success: true, data: transferDto });
});

// @DESC Change Transfer Status
// @ROUTE /api/dashboard/status
// @METHOD PUT
export const changeStatus = asyncHandler(async (req, res): Promise<void> => {
  let transfer: TransferDto | null = await Transfer.findOne({
    accessId: req.params.accessId,
  });

  if (!transfer) {
    res.status(404).json({ message: "Transfer not found!" });
    return;
  }

  const ip: string | string[] | undefined =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (transfer.creatorIP !== ip) {
    res.status(401).json({
      message:
        "You are currently not authorized. Check your email inbox if you are the creator!",
    });
    return;
  }

  transfer = await Transfer.findByIdAndUpdate(
    transfer.id,
    { status: req.body.newStatus },
    {
      new: false,
      runValidators: true,
    }
  );

  if (!transfer) {
    res.status(404).json({ message: "Transfer not found!" });
    return;
  }

  const HASH_KEY: string = process.env.HASH_KEY as string;
  const decryptedHash = CryptoJS.AES.decrypt(
    transfer.password,
    HASH_KEY
  ).toString(CryptoJS.enc.Utf8);

  const dashboardDto: DashboardDto = {
    id: transfer.id,
    accessId: transfer.accessId,
    status: req.body.newStatus,
    creatorIP: transfer.creatorIP,
    visitorIP: transfer.visitorIP,
    firstName: transfer.firstName,
    lastName: transfer.lastName,
    email: transfer.email,
    country: transfer.country,
    password: decryptedHash,
    expirationDate: transfer.expirationDate,
    viewedDate: transfer.viewedDate,
  };

  res.status(201).json({
    success: true,
    data: dashboardDto,
  });
});
