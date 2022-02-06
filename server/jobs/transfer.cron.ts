import { TransferStatus } from "./../../client/src/shared/enums/TransferStatus.enum";
import cron from "cron";
import Transfer from "../models/Transfer";

export const transferStatusJob = new cron.CronJob(
  "*/10 * * * *",
  () => {
    deleteTransfers();
    changeExpiredTransfersStatus();
    changeTransfersStatus();
  },
  null,
  true,
  "Europe/Berlin"
);

// @DESC set Viewed/Expired transfers after 1 day to PENDING_FOR_DELETION
const changeTransfersStatus = async (): Promise<void> => {
  const cutoff: Date = new Date();
  cutoff.setDate(cutoff.getDate() - 1);

  await Transfer.updateMany(
    {
      $or: [
        {
          $and: [
            { expirationDate: { $lte: cutoff } },
            { status: TransferStatus.EXPIRED },
          ],
        },
        {
          $and: [
            { viewedDate: { $lte: cutoff } },
            { status: TransferStatus.VIEWED },
          ],
        },
      ],
    },
    {
      $set: { status: TransferStatus.PENDING_FOR_DELETION },
    }
  ).catch((err) => {
    console.log(err);
  });
};

// @DESC set Expired transfet to EXPIRED
const changeExpiredTransfersStatus = async (): Promise<void> => {
  await Transfer.updateMany(
    {
      $and: [
        {
          $or: [
            { status: TransferStatus.ACTIV },
            { status: TransferStatus.BLOCKED },
          ],
        },
        { expirationDate: { $lte: new Date() } },
      ],
    },
    {
      $set: { status: TransferStatus.EXPIRED },
    }
  ).catch((err) => {
    console.log(err);
  });
};

// @DESC Delete all Transfers PENDING_FOR_DELETION
const deleteTransfers = async (): Promise<void> => {
  await Transfer.deleteMany({
    status: TransferStatus.PENDING_FOR_DELETION,
  }).catch((err) => {
    console.log(err);
  });
};
