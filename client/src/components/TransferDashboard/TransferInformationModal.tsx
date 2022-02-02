import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { ReactComponent as Svg } from "../../assets/svg/back-arrow.svg";
import { TransferView } from "../../shared/types/Transfer.type";

interface Props {
  isOpen: boolean;
  closeModal(): void;
  transfer: TransferView;
}

function TransferInformationModal(props: Props) {
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={props.closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg	" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block overflow-visible my-8 text-left align-middle transition-all transform">
                <div className="relative z-50 w-full bg-opacity-70 bg-primary-bg-darker max-w-4xl p-5 mx-auto my-auto rounded-xl shadow-lg  ">
                  <div
                    onClick={props.closeModal}
                    className="absolute left-4 top-4 flex cursor-pointer m-3 p-3 justify-center items-center  rounded-full border border-gray-600"
                  >
                    <Svg className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-10 my-6 py-4 mb-8 flex-auto justify-center">
                    <form>
                      <div className=" mb-10 py-4 px-7">
                        <h1 className="text-center text-3xl text-white">
                          Transfer Information
                        </h1>
                        <h3 className="text-white mx-14 mt-3 text-lg text-center">
                          Here you have access to all information about your
                          transfer. Be careful which ones you share.
                        </h3>
                      </div>
                      <div className="grid max-w-screen-lg mx-auto space-y-10 lg:grid-cols-2 lg:space-y-0 lg:divide-x divide-primary-bg-light">
                        <div className="space-y-12 sm:px-16">
                          <div className="flex flex-col max-w-md sm:flex-row">
                            <div className="mb-4 mr-4">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-bg-light">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-8 h-8 text-deep-purple-accent-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
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
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h6 className="mb-3 text-2xl text-white leading-5">
                                IP of Visitor
                              </h6>
                              <p className="text-base text-gray-400">
                                {props.transfer.visitorIP &&
                                props.transfer.visitorIP.length >= 1
                                  ? props.transfer.visitorIP.map((ip) => {
                                      return <span key={ip}>{ip}</span>;
                                    })
                                  : "~No visitor until now"}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col max-w-md sm:flex-row">
                            <div className="mb-4 mr-4">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-bg-light">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-8 h-8 text-deep-purple-accent-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h6 className="mb-3 text-white text-2xl leading-5">
                                View at
                              </h6>
                              <p className="text-base text-gray-400">
                                A flower in my garden, a mystery in my
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-12 sm:px-16">
                          <div className="flex flex-col max-w-md sm:flex-row">
                            <div className="mb-4 mr-4">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-bg-light">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-8 h-8 text-deep-purple-accent-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h6 className="mb-3 text-white text-2xl leading-5">
                                Time left
                              </h6>
                              <p className="text-base text-gray-400">
                                A flower in my garden, a mystery in my
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col max-w-md sm:flex-row">
                            <div className="mb-4 mr-4">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-bg-light">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-8 h-8 text-deep-purple-accent-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h6 className="mb-3 text-white text-2xl leading-5">
                                Credentials
                              </h6>
                              <p className="text-base text-gray-400">
                                A flower in my garden, a mystery in my
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default TransferInformationModal;
