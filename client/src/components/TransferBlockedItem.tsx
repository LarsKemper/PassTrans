import React, { useState } from "react";

interface Props {
  short: string;
  long: string;
}

function TransferBlockedItem(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="border rounded shadow-sm">
        <button
          onClick={() => setIsOpen(isOpen ? false : true)}
          type="button"
          className={`${
            isOpen ? "pb-0" : "pb-3"
          } flex items-center justify-between w-full p-3 focus:outline-none`}
        >
          <p className="text-base font-medium">{props.short}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className="w-3 text-white transition-transform duration-200"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              ></polyline>
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-3 pt-0">
            <p className="text-white text-sm">{props.long}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default TransferBlockedItem;
