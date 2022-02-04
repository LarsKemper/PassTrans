import { TransferStatus } from "./../../client/src/shared/enums/TransferStatus.enum";
import cron from "cron";
import Transfer from "../models/Transfer";

export const transferJob = new cron.CronJob(
  "*/10 * * * *",
  () => {
    deleteTransfers();
    changeTransfersStatus();
  },
  null,
  true,
  "Europe/Berlin"
);

// @DESC Change state of all viewed Transfers
const changeTransfersStatus = async (): Promise<void> => {
  const cutoff: Date = new Date();
  cutoff.setDate(cutoff.getDate() - 1);

  // set Viewed transfers after 1 day to PENDING_FOR_DELETION
  // set Expired transfers to PENDING_FOR_DELETION
  await Transfer.updateMany(
    {
      $and: [
        { isViewed: true },
        { viewedDate: { $lte: cutoff } },
        {
          $or: [
            { status: TransferStatus.EXPIRED },
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

// @DESC Delete all Transfers pending for deletion
const deleteTransfers = async (): Promise<void> => {
  await Transfer.deleteMany({
    status: TransferStatus.PENDING_FOR_DELETION,
  }).catch((err) => {
    console.log(err);
  });
};
