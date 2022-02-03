import cron from "cron";
import Transfer from "../models/Transfer";

export const transferJob = new cron.CronJob(
  "*/10 * * * *",
  () => {
    deleteViewedTransfers();
  },
  null,
  true,
  "Europe/Berlin"
);

// @DESC Delete all viewed Transfers
const deleteViewedTransfers = async (): Promise<void> => {
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

// TODO: Delete all expired Transfers ~older than x
// TODO: Cron that changes the Transfer Status
