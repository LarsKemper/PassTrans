import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { ReactComponent as Svg } from "../assets/svg/Security-amico.svg";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary-bg-light to-primary-bg-dark">
        <Nav />
        <div className="px-4 py-16 mx-auto sm:max-w-xl mIndexRouterd:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 flex items-center">
            <div className="lg:pr-10">
              <h5 className="mb-4 leading-normal text-4xl text-white">
                You will never be afraid
                <br className="hidden md:block" />
                of sending{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  passwords
                </span>{" "}
                again.
              </h5>
              <p className="mb-6 leading-relaxed text-base text-white">
                Enter the password to be transferred, copy your link, and send
                it to the target person. We will take care of the secure
                encryption of your password.
              </p>
              <div className="flex items-center space-x-2">
                <Link to="/create-transfer">
                  <span className="inline-flex items-center rounded justify-center w-full h-12 px-6 font-semiregular tracking-wide text-white transition duration-300< shadow-md md:w-auto bg-secondary-purple hover:bg-secondary-purple-2 focus:shadow-outline focus:outline-none">
                    Generate
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-full h-56 sm:h-96 relative">
              <svg
                className="-mt-12 absolute"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#323045"
                  d="M43.4,-75.5C56.9,-67.3,69.1,-57.1,77.2,-44.2C85.2,-31.3,89.1,-15.7,89.4,0.2C89.7,16,86.4,32,77.6,43.5C68.7,55,54.2,61.9,40.4,68.4C26.5,74.9,13.3,80.8,-0.5,81.6C-14.2,82.5,-28.4,78.2,-42.1,71.6C-55.8,65.1,-69,56.3,-78.5,43.9C-88,31.6,-93.8,15.8,-92.8,0.6C-91.8,-14.7,-84,-29.3,-73.8,-40.4C-63.6,-51.5,-51,-59,-38.3,-67.6C-25.6,-76.3,-12.8,-86.1,1.1,-87.9C14.9,-89.7,29.8,-83.6,43.4,-75.5Z"
                  transform="translate(100 100)"
                />
              </svg>
              <Svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150" />
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="bg-primary-bg-darker rounded-xl px-12 py-16 grid gap-6 row-gap-5 lg:grid-cols-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary-purple w-full h-16 mb-6 rounded lg:h-20 xl:h-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              <h5 className="text-white text-center mb-2 text-xl font-regular leading-none sm:text-2xl">
                A slice of heaven
              </h5>
              <p className="text-center text-white">
                O for awesome, this chocka full cuzzie is as rip-off as a
                cracker. Meanwhile, in behind the bicycle shed, Hercules Morse.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary-purple w-full h-16 mb-6 rounded lg:h-20 xl:h-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <h5 className="text-white text-center mb-2 text-xl font-regular leading-none sm:text-2xl">
                Disrupt inspire
              </h5>
              <p className="text-center text-white">
                I&apos;ll be sure to note that in my log. Smooth as an
                android&apos;s bottom, eh, Data? When has justice ever been as
                simple as a rule book?
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary-purple w-full h-16 mb-6 rounded lg:h-20 xl:h-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h5 className="text-white text-center mb-2 text-xl font-regular leading-none sm:text-2xl">
                Storage shed
              </h5>
              <p className="text-center text-white">
                Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                suscipit leo. Carpe diem vulputate est nec commodo rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
