import nodemailer from "nodemailer";
import { getTemplate } from "../shared/enums/mailTypes.enum";

type Mail = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export const sendMail = async (
  type: string,
  receiver: string,
  accessId: string,
  status: string | number
): Promise<void> => {
  if (process.env.MAIL_ISSENDING !== "true") {
    console.log("MAIL NOT SENDED");
    return;
  }

  const mail: Mail = {
    from: `"PassTrans" <${process.env.MAIL_USER}>`,
    to: receiver,
    subject: type,
    html: getTemplate(type, accessId, status),
  };

  if (
    !process.env.MAIL_HOST ||
    !process.env.MAIL_PORT ||
    !process.env.MAIL_USER ||
    !process.env.MAIL_PASS
  ) {
    return console.log("Sending an email failed - Check the .env file!");
  }

  const transporter = nodemailer.createTransport({
    host: String(process.env.MAIL_HOST),
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  return transporter.sendMail(mail, (err: Error | null) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email sended to: ${receiver}`);
    }
  });
};
