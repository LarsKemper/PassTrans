import React from "react";

function ViewTransferSkeleton() {
  return (
    <>
      <div>
        <div className="min-w-screen min-h-screen bg-gradient-to-br from-primary-bg-light to-primary-bg-dark flex items-center justify-center px-5 py-5">
          <div className="bg-secondary-purple rounded-xl shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-2/4">
            <div className="flex flex-wrap -mx-3 items-center">
              <div className="w-full sm:w-2/5 px-3 md:block">
                <div className="p-5 xl:px-8 md:py-5 flex justify-center">
                  <div className="animate-pulse bg-secondary-purple-light h-56 w-44 rounded-xl"></div>
                </div>
              </div>
              <div className="w-full sm:w-3/5 px-3">
                <div className="p-5 xl:px-8 md:py-5">
                  <div className="animate-pulse bg-secondary-purple-light w-52 h-9 rounded-t-xl"></div>
                  <div className="animate-pulse bg-secondary-purple-light rounded-b-xl rounded-r-xl h-7 mb-5"></div>
                  <p className="flex items-center my-2">
                    <div className="animate-pulse rounded-lg h-7 w-7 mr-4 bg-secondary-purple-light"></div>
                    <div className="animate-pulse w-full rounded-lg h-7 mr-12 bg-secondary-purple-light"></div>
                  </p>
                  <p className="flex items-center my-2">
                    <div className="animate-pulse rounded-lg h-7 w-7 mr-4 bg-secondary-purple-light"></div>
                    <div className="animate-pulse w-full rounded-lg h-7 mr-12 bg-secondary-purple-light"></div>
                  </p>
                  <p className="flex items-center my-2">
                    <div className="animate-pulse rounded-lg h-7 w-7 mr-4 bg-secondary-purple-light"></div>
                    <div className="animate-pulse w-full rounded-lg h-7 mr-12 bg-secondary-purple-light"></div>
                  </p>
                </div>
                <div className="w-full px-3">
                  <div className="space-x-5 flex p-2 xl:px-5">
                    <div className="animate-pulse h-10 w-full py-2 px-4 rounded-xl bg-secondary-purple-light"></div>
                    <div className="animate-pulse h-10 w-full py-2 px-4 rounded-xl bg-secondary-purple-light"></div>
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

export default ViewTransferSkeleton;
