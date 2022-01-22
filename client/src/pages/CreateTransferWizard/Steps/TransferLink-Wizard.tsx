import React, { useState, useEffect } from "react";
import ProgressWizard from "../../../components/ProgressWizard";
import { generateLink } from "../../../services/generateLink.service";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Transfer } from "../../../shared/types/Transfer.type";
// SVGs
import { ReactComponent as FacebookSvg } from "../../../assets/svg/social media/facebook.svg";
import { ReactComponent as WhatsappSvg } from "../../../assets/svg/social media/whatsapp.svg";
import { ReactComponent as EmailSvg } from "../../../assets/svg/social media/maildotru.svg";
// Share buttons
import {
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";

export interface TransferLink {
  prevStep(): void;
  nextStep(): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>, input: any): void;
  setID(accessId: string): void;
  submit(): void;
  values: Transfer;
}

function TransferLink(props: TransferLink) {
  const { link, id } = generateLink();
  const [transferLink] = useState<string>(link);
  const [transferId] = useState<string>(id);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (transferId) {
      props.setID(id);
    }
  }, []);

  return (
    <>
      <div className="min-w-screen relative overflow-hidden min-h-screen bg-gradient-to-br from-primary-bg-light to-primary-bg-dark flex items-center justify-center px-5 py-5">
        <div
          className="relative text-gray-500 w-full"
          style={{ maxWidth: "1000px" }}
        >
          <div className="relative z-50 bg-opacity-90 bg-primary-bg-darker rounded-xl shadow-xl">
            <div className="md:flex w-full">
              <div className="w-full py-10 px-5 md:px-10">
                <ProgressWizard step={props.values.step} />
                <div className="text-center my-10">
                  <h1 className="font-bold text-3xl text-white">
                    TRANSFER LINK
                  </h1>
                  <p className="text-white">
                    Copy and share your link to transfer the password
                  </p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-white text-xs px-1">
                        Transfer link
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          readOnly
                          defaultValue={transferLink}
                          className="text-white bg-primary-bg-darker bg-opacity-90 w-full -ml-10 pl-10 pr-3 py-2 rounded-l-lg border border-gray-200 outline-none focus:border-secondary-purple"
                        />
                        <CopyToClipboard
                          text={transferLink}
                          onCopy={() => setCopied(true)}
                        >
                          <span className="bg-primary-bg-darker hover:bg-white hover:text-primary-bg-dark duration-300 text-white bg-opacity-90 px-8 py-2 rounded-r-lg border border-gray-200 outline-none focus:border-secondary-purple">
                            {copied ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-1.5 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            ) : (
                              "Copy"
                            )}
                          </span>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-1/3 px-3 mb-5">
                      <label
                        htmlFor=""
                        className="text-white text-xs px-1"
                      ></label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <FacebookShareButton
                          className="group w-full -ml-10 cursor-pointer bg-primary-bg-darker bg-opacity-90 "
                          url={transferLink}
                        >
                          <div className="duration-300 hover:bg-white flex justify-center items-center w-full pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-secondary-purple">
                            <FacebookSvg className="w-6 h-6 group-hover:fill-primary-bg-dark fill-white stroke-transparent" />
                          </div>
                        </FacebookShareButton>
                      </div>
                    </div>
                    <div className="w-1/3 px-3 mb-5">
                      <label
                        htmlFor=""
                        className="text-white text-xs px-1"
                      ></label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <EmailShareButton
                          className="group w-full -ml-10 cursor-pointer bg-primary-bg-darker bg-opacity-90 "
                          url={transferLink}
                        >
                          <div className="duration-300 hover:bg-white flex justify-center items-center w-full pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-secondary-purple">
                            <EmailSvg className="w-6 h-6 group-hover:fill-primary-bg-dark fill-white stroke-transparent" />
                          </div>
                        </EmailShareButton>
                      </div>
                    </div>
                    <div className="w-1/3 px-3 mb-5">
                      <label
                        htmlFor=""
                        className="text-white text-xs px-1"
                      ></label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>

                        <WhatsappShareButton
                          className="group w-full -ml-10 cursor-pointer bg-primary-bg-darker bg-opacity-90 "
                          url={transferLink}
                        >
                          <div className="duration-300 hover:bg-white flex justify-center items-center w-full pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-secondary-purple">
                            <WhatsappSvg className="w-6 h-6 group-hover:fill-primary-bg-dark fill-white stroke-transparent" />
                          </div>
                        </WhatsappShareButton>
                      </div>
                    </div>
                  </div>
                  <div className="invisible flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label htmlFor="" className="text-white text-xs px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          className="bg-primary-bg-darker bg-opacity-90 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-secondary-purple"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="flex w-full px-3 mb-5">
                      <button
                        onClick={props.prevStep}
                        className="bg-opacity-100 block w-full max-w-xs mx-auto bg-secondary-purple hover:bg-secondary-purple-2 focus:secondary-purple-dark text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        BACK
                      </button>
                      <button
                        onClick={props.submit}
                        className="bg-opacity-100 block w-full max-w-xs mx-auto bg-secondary-purple hover:bg-secondary-purple-2 focus:secondary-purple-dark text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="absolute w-2/5 -bottom-20 md:-bottom-56 xl:-bottom-56 -right-20 xl:-right-44"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#6C63FF"
              d="M46.9,-80.9C60.5,-73.3,71.1,-60.2,79.1,-45.8C87.1,-31.4,92.5,-15.7,92.8,0.2C93.1,16,88.2,32.1,79.8,45.8C71.4,59.5,59.4,70.8,45.5,78C31.6,85.2,15.8,88.2,-0.4,88.9C-16.6,89.6,-33.2,87.9,-47.4,80.9C-61.5,73.9,-73.2,61.4,-80.4,47.1C-87.7,32.7,-90.5,16.3,-90.3,0.1C-90.2,-16.2,-87.1,-32.4,-79.3,-45.7C-71.4,-59,-58.8,-69.4,-44.8,-76.8C-30.7,-84.1,-15.4,-88.3,0.6,-89.4C16.6,-90.5,33.3,-88.5,46.9,-80.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute w-3/12 -bottom-20 md:-bottom-40 z-10 left-16 -bottom-25"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#6C63FF"
              d="M45.2,-71.8C58.8,-61.6,70.2,-49.4,77.9,-34.9C85.6,-20.3,89.7,-3.4,88.7,13.7C87.7,30.8,81.6,48.1,70.2,60.1C58.7,72.2,41.9,79,24.9,83.2C7.9,87.4,-9.4,89.1,-24.7,84.4C-40,79.8,-53.4,68.8,-63.9,55.8C-74.4,42.8,-82,27.9,-85.9,11.4C-89.8,-5.2,-90.1,-23.2,-83.8,-38.8C-77.5,-54.3,-64.6,-67.4,-49.5,-76.9C-34.5,-86.4,-17.2,-92.4,-0.7,-91.2C15.8,-90.1,31.6,-82,45.2,-71.8Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute w-2/12 z-10 bottom-20 md:-left-16 md:bottom-24 xl:-left-24 xl:bottom-44"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#6C63FF"
              d="M56.6,-67.2C72.4,-54.1,83.8,-35.4,83.3,-17.7C82.8,0,70.4,16.7,60,34.7C49.7,52.7,41.4,71.9,26.2,81.8C10.9,91.6,-11.4,92.1,-26.1,82.2C-40.9,72.4,-48.1,52.1,-58.9,33.8C-69.7,15.5,-84,-0.9,-85.5,-18.9C-86.9,-37,-75.4,-56.6,-59,-69.6C-42.6,-82.7,-21.3,-89.1,-0.5,-88.5C20.3,-88,40.7,-80.4,56.6,-67.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default TransferLink;
