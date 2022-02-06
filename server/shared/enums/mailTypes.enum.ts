import { CreatedTemplate } from "../../resources/email/CreatedTemplate";
import { StatusUpdateTemplate } from "../../resources/email/StatusUpdateTemplate";
import { VerificationTemplate } from "../../resources/email/VerificationTemplate";

export const mailType = {
  CREATED: "Your transfer was created",
  STATUS_UPDATE: "Update: The status of your transfer has been changed",
  VERIFICATION: "Please verify your access",
};

export function getTemplate(
  type: string,
  accessId: string,
  status: string
): string {
  switch (type) {
    case mailType.CREATED:
      return CreatedTemplate(accessId);
    case mailType.STATUS_UPDATE:
      return StatusUpdateTemplate(status, accessId);
    case mailType.VERIFICATION:
      return VerificationTemplate(accessId);
    default:
      return "Failed";
  }
}
