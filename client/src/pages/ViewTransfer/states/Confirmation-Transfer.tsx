import React from "react";
import { ReactComponent as Svg } from "../../../assets/svg/My password-pana.svg";
import { Link } from "react-router-dom";

interface Props {
  viewPassword(): void;
}

function Confirmation(props: Props) {
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
                    Please read the following and be aware of the content!
                  </h5>
                  <p className="flex items-center text-base my-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Your password will be irretrievably deleted from the server
                    after you view it.
                  </p>
                  <p className="flex items-center text-base my-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    Save your password immediately in a safe place.
                  </p>
                  <p className="flex items-center text-base my-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Do not reload this page until you have securely saved your
                    password.
                  </p>
                </div>
                <div className="w-full px-3 text-center">
                  <div className="space-x-5 flex p-2 xl:px-5">
                    <button
                      onClick={props.viewPassword}
                      className="w-full py-2 px-4 rounded-xl text-white bg-primary-bg-dark hover:bg-primary-bg-darker focus:outline-none transition duration-150 ease-in-out"
                    >
                      View Password
                    </button>
                    <Link
                      to="/"
                      className="w-full py-2 px-4 rounded-xl text-white bg-red-700 hover:bg-red-900 focus:outline-none transition duration-150 ease-in-out"
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

export default Confirmation;
