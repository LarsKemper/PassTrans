import React, { useState, useRef, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { error, success } from "../services/alert/alert.service";
import { verifyRequestCode } from "../api/dashboard.api";
import { useParams, useNavigate } from "react-router-dom";

function TransferVerification() {
  const [loading, setLoading] = useState<boolean>(false);
  const verificationCodeRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !params.accessId ||
      params.accessId.length > 12 ||
      params.accessId.length < 12
    ) {
      navigate("/404");
    }
  }, [params]);

  async function handleSubmit(
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) {
    e.preventDefault();
    if (!params.accessId) {
      navigate("/404");
      return;
    }
    if (!verificationCodeRef.current?.value) {
      error("Please enter your verification code");
      return;
    }
    if (
      verificationCodeRef.current.value.length < 4 ||
      verificationCodeRef.current.value.length > 4
    ) {
      error("Please enter a valid verification code");
      return;
    }
    setLoading(true);

    return await verifyRequestCode(
      params.accessId,
      verificationCodeRef.current.value
    )
      .then((res) => {
        if (res.status === 201) {
          success(
            "The verification is finished! You can now access the dashboard of your transfer."
          );
          navigate("/");
        }
        setLoading(false);
      })
      .catch((err) => {
        error(err.response.data.message);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="min-h-screen overflow-hidden px-4 text-center bg-gradient-to-br from-primary-bg-light to-primary-bg-dark">
        <span
          className="inline-block h-screen align-middle"
          aria-hidden="true"
        ></span>
        <div className="relative inline-block overflow-visible my-8 text-left align-middle transition-all transform">
          <div className="flex justify-center items-center">
            <div className=" z-50 w-full bg-opacity-80 bg-primary-bg-darker max-w-lg p-5 mx-auto my-auto rounded-xl shadow-lg  ">
              <div className="px-10 my-6 py-4 flex-auto justify-center">
                <form onSubmit={handleSubmit}>
                  <div className=" mb-10 py-4 px-7">
                    <h1 className="text-center text-3xl text-white">
                      Transfer Verification
                    </h1>
                    <h3 className="text-white mt-3 text-lg text-center">
                      Enter the code from the email sent to you. The code is
                      valid for 24 hours.
                    </h3>
                  </div>
                  <input
                    type="number"
                    className="text-white bg-opacity-70 bg-primary-bg-darker w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 outline-none focus:border-secondary-purple"
                    placeholder="Verification Code"
                    ref={verificationCodeRef}
                    maxLength={4}
                    required
                  />
                  <button
                    type="submit"
                    className=" bg-opacity-100 mt-5 block w-full mx-auto bg-secondary-purple hover:bg-secondary-purple-2 focus:secondary-purple-dark text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    {loading ? (
                      <BeatLoader color="white" size={10} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </div>
            </div>
            <svg
              className="absolute w-4/5 -left-48 -top-32"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#6C63FF"
                d="M46.9,-80.9C60.5,-73.3,71.1,-60.2,79.1,-45.8C87.1,-31.4,92.5,-15.7,92.8,0.2C93.1,16,88.2,32.1,79.8,45.8C71.4,59.5,59.4,70.8,45.5,78C31.6,85.2,15.8,88.2,-0.4,88.9C-16.6,89.6,-33.2,87.9,-47.4,80.9C-61.5,73.9,-73.2,61.4,-80.4,47.1C-87.7,32.7,-90.5,16.3,-90.3,0.1C-90.2,-16.2,-87.1,-32.4,-79.3,-45.7C-71.4,-59,-58.8,-69.4,-44.8,-76.8C-30.7,-84.1,-15.4,-88.3,0.6,-89.4C16.6,-90.5,33.3,-88.5,46.9,-80.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <div
              style={{
                width: "700px",
                height: "325px",
                backgroundColor: "#353348",
              }}
              className="rounded-3xl top-48 absolute"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransferVerification;
