import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { ReactComponent as Svg } from "../../assets/svg/back-arrow.svg";
import { TransferStatus } from "../../shared/enums/TransferStatus.enum";
import TransferControlElement from "../../components/TransferDashboard/TransferControlElement";
import { ControlElementType } from "../../shared/enums/controlElementType.enum";

interface Props {
  isOpen: boolean;
  closeModal(): void;
  status: TransferStatus;
}

function TransferControlModal(props: Props) {
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
                          Transfer Controls
                        </h1>
                        <h3 className="text-white mx-14 mt-3 text-lg text-center">
                          Here you have access to all information about your
                          transfer. Be careful which ones you share.
                        </h3>
                      </div>
                      <div className="grid max-w-md gap-10 duration-300 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                        <TransferControlElement
                          type={ControlElementType.BLOCK}
                          title="Block"
                          desc="After you have blocked your transfer, it will not be available to anyone but you."
                          selected={false}
                        />
                        <TransferControlElement
                          type={ControlElementType.ACTIV}
                          title="Activ"
                          desc="By default, your transfer is active and thus accessible via your access link"
                          selected={true}
                        />
                        <TransferControlElement
                          type={ControlElementType.DELETE}
                          title="Delete"
                          desc="After you delete your transfer it will be irrevocably deleted from our servers."
                          selected={false}
                        />
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

export default TransferControlModal;
