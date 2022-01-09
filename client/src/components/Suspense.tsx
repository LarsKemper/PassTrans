import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

function Suspense() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full bg-gradient-to-br from-primary-bg-light to-primary-bg-dark">
      <SyncLoader color="white" size={20} />
    </div>
  );
}

export default Suspense;
