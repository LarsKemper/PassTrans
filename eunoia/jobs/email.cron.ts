import { mailType } from "./../shared/enums/mailTypes.enum";
import { TransferStatus } from "./../../client/src/shared/enums/TransferStatus.enum";
import cron from "cron";
import Transfer from "../models/Transfer";
import { sendMail } from "../services/mailer.service";

export const transferStatusEmailJob = new cron.CronJob(
  "*/30 * * * *",
  () => {
    sendEmailIfUpdated();
  },
  null,
  true,
  "Europe/Berlin"
);

// @DESC Send Email to creator if status of transfer was changed
const sendEmailIfUpdated = async (): Promise<void> => {
  await Transfer.find({
    $and: [
      { statusUpdated: true },
      { status: { $ne: TransferStatus.PENDING_FOR_DELETION } },
    ],
  })
    .then(async (transfers) => {
      transfers.map(async (transfer) => {
        await Transfer.findByIdAndUpdate(transfer.id, {
          statusUpdated: false,
        });
        sendMail(
          mailType.STATUS_UPDATE,
          transfer.email,
          transfer.accessId,
          transfer.status
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
