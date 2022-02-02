import React, { useState } from "react";
import TransferStatusIndicator from "../../../components/TransferDashboard/TransferStatusIndicator";
import {
  getTransferStatusSpec,
  TransferStatus,
} from "../../../shared/enums/TransferStatus.enum";
import TransferInformationModal from "../../../components/TransferDashboard/TransferInformationModal";
import TransferControlModal from "../../../components/TransferDashboard/TransferControlModal";
import { TransferView } from "../../../shared/types/Transfer.type";

interface Props {
  transfer: TransferView;
}

function TransferDashboardView(props: Props) {
  console.log(props);
  const [isInformationModalOpen, setIsInformationModalOpen] =
    useState<boolean>(false);
  const [isControlModalOpen, setIsControlModalOpen] = useState<boolean>(false);

  return (
    <>
      <TransferInformationModal
        isOpen={isInformationModalOpen}
        closeModal={() => setIsInformationModalOpen(false)}
        transfer={props.transfer}
      />
      <TransferControlModal
        isOpen={isControlModalOpen}
        closeModal={() => setIsControlModalOpen(false)}
        status={TransferStatus.ACTIV}
      />
      <div className="min-w-screen relative overflow-hidden min-h-screen bg-gradient-to-br from-primary-bg-light to-primary-bg-dark flex items-center justify-center px-5 py-5">
        <div
          className="relative text-gray-500 w-full"
          style={{ maxWidth: "1200px" }}
        >
          <div className="relative z-50 bg-opacity-90 bg-primary-bg-darker rounded-xl shadow-xl">
            <div className="mx-20 py-16 h-full grid overflow-hidden grid-cols-2 grid-rows-4 gap-2">
              <div className="px-2 mr-4 box mt-10 row-start-1 row-end-3 col-start-1 col-end-2">
                <h1 className="font-medium text-4xl text-white">
                  TRANSFER DASHBOARD
                </h1>
                <p className="text-white text-lg mt-5">
                  Here you can view information about your password transfer.
                  You can also control the bend with the controls. For example,
                  you can block this transfer so that no one can access it.
                </p>
              </div>
              <div className="ml-4 box row-start-1 row-end-3 col-start-2 col-end-3">
                <div className="box row-start-3 row-end-5 col-start-1 col-end-2">
                  <div className="flex-col justify-center items-center w-full rounded-xl bg-primary-bg-darker-card mt-8 p-8">
                    <div className="flex justify-center items-center">
                      <div className="bg-gradient-to-tl from-rose-400 to-orange-300 flex justify-center items-center w-14 h-14 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-9 w-9 text-primary-bg-darker-card"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h1 className="ml-4 font-medium text-2xl text-white">
                        Informations
                      </h1>
                    </div>
                    <div className="text-white text-justify text-lg mt-5">
                      <button
                        onClick={() => setIsInformationModalOpen(true)}
                        className="bg-opacity-100 mt-8 my-5  block w-full mx-auto bg-secondary-purple hover:bg-secondary-purple-2 focus:secondary-purple-dark text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        Open Informations
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-4 box row-start-3 row-end-5 col-start-1 col-end-2">
                <div className="flex-col justify-center items-center w-full rounded-xl bg-primary-bg-darker-card mt-8 p-8">
                  <TransferStatusIndicator
                    status={TransferStatus.PENDING_FOR_DELETION}
                  />
                  <p className="text-white text-justify text-lg mt-5">
                    {
                      getTransferStatusSpec(TransferStatus.PENDING_FOR_DELETION)
                        .desc
                    }
                  </p>
                </div>
              </div>
              <div className="ml-4 box row-start-3 row-end-5 col-start-2 col-end-3">
                <div className="box row-start-3 row-end-5 col-start-1 col-end-2">
                  <div className="flex-col justify-center items-center w-full rounded-xl bg-primary-bg-darker-card mt-8 p-8">
                    <div className="flex justify-center items-center">
                      <div className="bg-gradient-to-tl from-sky-400 to-sky-200 flex justify-center items-center w-14 h-14 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-9 w-9 text-primary-bg-darker-card"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <h1 className="ml-4 font-medium text-2xl text-white">
                        Controls
                      </h1>
                    </div>
                    <div className="text-white text-justify text-lg mt-5">
                      <button
                        onClick={() => setIsControlModalOpen(true)}
                        className="bg-opacity-100 mt-8 my-5  block w-full mx-auto bg-secondary-purple hover:bg-secondary-purple-2 focus:secondary-purple-dark text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        Open Controls
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransferDashboardView;
