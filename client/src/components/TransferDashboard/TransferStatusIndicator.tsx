import React, { useState } from "react";
import {
  TransferStatus,
  getTransferStatusSpec,
} from "../../shared/enums/TransferStatus.enum";

interface Props {
  status: TransferStatus;
}

function TransferStatusIndicator(props: Props) {
  const [tag] = useState(getTransferStatusSpec(props.status).tag);

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${
          getTransferStatusSpec(props.status).gradient
        } flex justify-center items-center w-14 h-14 rounded-xl`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 text-primary-bg-darker-card"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {tag === TransferStatus.ACTIV ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          ) : (
            false
          )}
          {tag === TransferStatus.BLOCKED ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          ) : (
            false
          )}
          {tag === TransferStatus.EXPIRED ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          ) : (
            false
          )}
          {tag === TransferStatus.VIEWED ? (
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </>
          ) : (
            false
          )}
          {tag === TransferStatus.PENDING_FOR_DELETION ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          ) : (
            false
          )}
        </svg>
      </div>
      <h1 className="ml-4 font-medium text-2xl text-white">
        {getTransferStatusSpec(props.status).title}
      </h1>
    </div>
  );
}

export default TransferStatusIndicator;
