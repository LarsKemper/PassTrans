import React, { Fragment, useRef } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { error } from "../services/alert/alert.service";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  closeModal(): void;
  title: string;
  actionText: string;
  baseLink: string;
}

function AccessViewModal(props: Props) {
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (idRef.current) {
      if (idRef.current.value.length !== 12) {
        error("Please enter a valid ID");
        return;
      }
      navigate(`${props.baseLink}${idRef.current.value}`);
      return;
    }
    error("Enter an ID to continue");
  }

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
              <div className="inline-block overflow-visible m-8 text-left align-middle transition-all transform">
                <div className="relative z-50 w-full bg-opacity-70 bg-primary-bg-darker max-w-lg p-5 mx-auto my-auto rounded-xl shadow-lg  ">
                  <div className="px-10 my-6 py-4 flex-auto justify-center">
                    <form onSubmit={handleSubmit}>
                      <div className=" mb-10 py-4 px-7">
                        <h1 className="text-center text-3xl text-white">
                          {props.title}
                        </h1>
                        <h3 className="text-white mt-3 text-lg text-center">
                          Enter the ID of the transfer you want to access
                        </h3>
                      </div>
                      <input
                        type="text"
                        className="text-white bg-opacity-70 bg-primary-bg-darker w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 outline-none focus:border-secondary-purple"
                        placeholder="Enter ID or Link"
                        ref={idRef}
                        required
                      />
                      <button
                        type="submit"
                        className="bg-opacity-100 mt-5 block w-full mx-auto bg-secondary-purple hover:bg-secondary-purple-2 focus:secondary-purple-dark text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        {props.actionText}
                      </button>
                    </form>
                  </div>
                  <div
                    onClick={props.closeModal}
                    className="absolute right-4 top-4 flex cursor-pointer m-3 p-3 justify-center items-center  rounded-full border border-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
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

export default AccessViewModal;
