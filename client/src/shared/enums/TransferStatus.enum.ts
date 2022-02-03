export enum TransferStatus {
  ACTIV = "ACTIV",
  BLOCKED = "BLOCKED",
  VIEWED = "VIEWED",
  EXPIRED = "EXPIRED",
  PENDING_FOR_DELETION = "PENDING_FOR_DELETION",
}

interface TransferStatusSpec {
  tag: string;
  title: string;
  gradient: string;
  desc: string;
}

export function getTransferStatusSpec(
  transferStatus: string
): TransferStatusSpec {
  switch (transferStatus) {
    case TransferStatus.BLOCKED:
      return {
        tag: "BLOCKED",
        title: "Blocked",
        gradient: "bg-gradient-to-tl from-rose-400 via-rose-500 to-red-700",
        desc: "Your password transfer was blocked. This happened either on your instruction or for security reasons to protect your password.",
      };
    case TransferStatus.VIEWED:
      return {
        tag: "VIEWED",
        title: "Viewed",
        gradient:
          "bg-gradient-to-tl from-indigo-200 via-violet-400 to-indigo-800",
        desc: "The password has already been viewed which means that this transfer is no longer accessible. Within the next 24 hours this transfer will be deleted from our servers.",
      };
    case TransferStatus.EXPIRED:
      return {
        tag: "EXPIRED",
        title: "Expired",
        gradient:
          "bg-gradient-to-tl from-fuchsia-300 via-purple-400 to-purple-900",
        desc: "The expiration date you set has passed which means that your password transfer is no longer available. You can not reactivate this transfer.",
      };
    case TransferStatus.PENDING_FOR_DELETION:
      return {
        tag: "PENDING_FOR_DELETION",
        title: "Pending for deletion",
        gradient:
          "bg-gradient-to-tl from-yellow-300 via-amber-400 to-amber-700",
        desc: "Your password transfer will be deleted from our servers within the next 10 minutes. After that it is no longer accessible and unrecoverable. ",
      };
    case TransferStatus.ACTIV:
      return {
        tag: "ACTIV",
        title: "Activ",
        gradient: "bg-gradient-to-br from-green-600 to-lime-400",
        desc: "At the moment your password transfer is still active. This means that no one has received the password yet.",
      };
    default:
      return {
        tag: "ACTIV",
        title: "Activ",
        gradient: "bg-gradient-to-br from-green-600 to-lime-400",
        desc: "At the moment your password transfer is still active. This means that no one has received the password yet.",
      };
  }
}
