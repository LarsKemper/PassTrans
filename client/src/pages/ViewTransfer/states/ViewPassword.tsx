import React, { useState } from "react";
import { ReactComponent as Svg } from "../../../assets/svg/My password-cuate.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

function ViewPassword() {
  const [copied, setCopied] = useState<boolean>(false);
  // TODO: Display password

  return (
    <>
      <div>
        <div className="min-w-screen min-h-screen bg-gradient-to-br from-primary-bg-light to-primary-bg-dark flex items-center justify-center px-5 py-5">
          <div className="bg-secondary-purple text-white rounded-xl shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-2/4">
            <div className="flex flex-wrap -mx-3 items-center">
              <div className="w-full sm:w-2/5 px-3 text-center md:block">
                <div className="p-5 xl:px-8 md:py-5">
                  <Svg />
                </div>
              </div>
              <div className="w-full sm:w-3/5 px-3 text-left">
                <div className="p-5 xl:px-8 md:py-5">
                  <h3 className="text-3xl">Your Password</h3>
                  <h5 className="text-lg mb-5">
                    The password can be displayed only once!
                  </h5>
                  <div className="px-5 w-full rounded-xl bg-primary-bg-dark">
                    <div className="flex">
                      <div className="py-8 w-full px-3">
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="text"
                            readOnly
                            defaultValue={"Password"}
                            className="bg-primary-bg-darker bg-opacity-90 w-full -ml-10 pl-10 pr-3 py-2 rounded-l-lg border border-gray-200 outline-none focus:border-secondary-purple"
                          />
                          <CopyToClipboard
                            text={"Password"}
                            onCopy={() => setCopied(true)}
                          >
                            <span className="cursor-pointer bg-primary-bg-darker hover:bg-white hover:text-primary-bg-dark duration-300 text-white bg-opacity-90 px-8 py-2 rounded-r-lg border border-gray-200 outline-none focus:border-secondary-purple">
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
                  </div>
                </div>
                <div className="w-full px-3 text-center">
                  <div className="flex p-2 xl:px-5">
                    <Link
                      to="/"
                      className="w-full py-2 px-4 rounded-xl text-white bg-primary-bg-dark hover:bg-primary-bg-darker focus:outline-none transition duration-150 ease-in-out"
                    >
                      Back Home
                    </Link>
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

export default ViewPassword;
