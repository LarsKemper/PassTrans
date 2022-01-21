import cron from "cron";
import Transfer from "../models/Transfer";

export const transferJob = new cron.CronJob(
  "*/10 * * * *",
  () => {
    deleteExpiredTransfers();
  },
  null,
  true,
  "Europe/Berlin"
);

// @DESC Delete all expired Transfers
const deleteExpiredTransfers = async (): Promise<void> => {
  const cutoff: Date = new Date();
  cutoff.setDate(cutoff.getDate() - 1);

  await Transfer.find({
    isViewed: true,
    viewedDate: { $lte: cutoff },
  }).then((transfers) => {
    console.log("deleted: " + transfers.length + " transfers");
    transfers.forEach((x) => x.remove());
  });
};
