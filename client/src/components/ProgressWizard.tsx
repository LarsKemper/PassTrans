import React from "react";

interface Props {
  step: number;
}

function Wizard(props: Props) {
  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className={`bg-secondary-purple w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center`}
            >
              <span className={`text-center text-white w-full`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-secondary-purple-2 py-1 rounded"
                  style={
                    props.step === 1
                      ? { width: "50%" }
                      : props.step < 1
                      ? { width: "0%" }
                      : { width: "100%" }
                  }
                ></div>
              </div>
            </div>
            <div
              className={`${
                props.step >= 2 ? "bg-secondary-purple" : "bg-white"
              } w-10 h-10 mx-auto bg-secondary-purple rounded-full text-lg text-white flex items-center`}
            >
              <span
                className={`${
                  props.step >= 2 ? "text-white" : "text-gray-600"
                } text-center w-full`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  width="24"
                  height="24"
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
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-secondary-purple-2 py-1 rounded"
                  style={
                    props.step === 2
                      ? { width: "50%" }
                      : props.step < 2
                      ? { width: "0%" }
                      : { width: "100%" }
                  }
                ></div>
              </div>
            </div>
            <div
              className={`${
                props.step >= 3 ? "bg-secondary-purple" : "bg-white"
              } w-10 h-10 mx-auto bg-secondary-purple rounded-full text-lg text-white flex items-center`}
            >
              <span
                className={`${
                  props.step >= 3 ? "text-white" : "text-gray-600"
                } text-center w-full`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-secondary-purple-2 py-1 rounded"
                  style={
                    props.step === 3
                      ? { width: "50%" }
                      : props.step < 3
                      ? { width: "0%" }
                      : { width: "100%" }
                  }
                ></div>
              </div>
            </div>
            <div
              className={`${
                props.step >= 4 ? "bg-secondary-purple" : "bg-white"
              } w-10 h-10 mx-auto bg-secondary-purple rounded-full text-lg text-white flex items-center`}
            >
              <span
                className={`${
                  props.step >= 4 ? "text-white" : "text-gray-600"
                } text-center w-full`}
              >
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wizard;
