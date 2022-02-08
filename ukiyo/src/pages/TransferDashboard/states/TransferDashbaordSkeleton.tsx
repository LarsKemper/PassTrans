import React from "react";

function TransferDashbaordSkeleton() {
  return (
    <div className="min-w-screen relative overflow-hidden min-h-screen bg-gradient-to-br from-primary-bg-light to-primary-bg-dark flex items-center justify-center px-5 py-5">
      <div className="relative w-full" style={{ maxWidth: "1200px" }}>
        <div className="relative z-50 bg-opacity-90 bg-primary-bg-darker rounded-xl shadow-xl">
          <div className="mx-20 py-16 h-full grid overflow-hidden grid-cols-2 grid-rows-4 gap-2">
            <div className="px-2 mr-4 box mt-10 row-start-1 row-end-3 col-start-1 col-end-2">
              <div className="animate-pulse bg-primary-bg-darker-card rounded-xl h-10"></div>
              <div className="animate-pulse mt-5 bg-primary-bg-darker-card rounded-xl h-28"></div>
            </div>
            <div className="ml-4 box row-start-1 row-end-3 col-start-2 col-end-3">
              <div className="box row-start-3 row-end-5 col-start-1 col-end-2">
                <div className="animate-pulse flex-col justify-center items-center w-full rounded-xl bg-primary-bg-darker-card mt-8 p-8">
                  <div className="flex justify-center items-center">
                    <div className="bg-primary-bg-light flex justify-center items-center w-14 h-14 rounded-xl"></div>
                    <div className="ml-4 w-40 bg-primary-bg-light rounded-xl h-8"></div>
                  </div>
                  <div className="mt-5">
                    <div className="h-12 mt-8 my-5  block w-full mx-auto bg-primary-bg-light rounded-lg px-3 py-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-4 box row-start-3 row-end-5 col-start-1 col-end-2">
              <div className="box row-start-3 row-end-5 col-start-1 col-end-2">
                <div className="animate-pulse flex-col justify-center items-center w-full rounded-xl bg-primary-bg-darker-card mt-8 p-8">
                  <div className="flex justify-center items-center">
                    <div className="bg-primary-bg-light flex justify-center items-center w-14 h-14 rounded-xl"></div>
                    <div className="ml-4 w-40 bg-primary-bg-light rounded-xl h-8"></div>
                  </div>
                  <div className="mt-5">
                    <div className="h-12 mt-8 my-5  block w-full mx-auto bg-primary-bg-light rounded-lg px-3 py-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4 mb-1 box row-start-3 row-end-5 col-start-2 col-end-3">
              <div className="box row-start-3 row-end-5 col-start-1 col-end-2">
                <div className="animate-pulse flex-col justify-center items-center w-full rounded-xl bg-primary-bg-darker-card mt-8 p-8">
                  <div className="flex justify-center items-center">
                    <div className="bg-primary-bg-light flex justify-center items-center w-14 h-14 rounded-xl"></div>
                    <div className="ml-4 w-40 bg-primary-bg-light rounded-xl h-8"></div>
                  </div>
                  <div className="mt-5">
                    <div className="h-12 mt-8 my-5  block w-full mx-auto bg-primary-bg-light rounded-lg px-3 py-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferDashbaordSkeleton;
