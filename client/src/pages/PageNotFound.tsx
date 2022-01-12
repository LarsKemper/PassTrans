import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Svg404 } from "../assets/svg/404.svg";

function PageNotFound() {
  return (
    <>
      <div className="bg-gradient-to-br from-primary-bg-light to-primary-bg-dark text-white min-h-screen flex items-center">
        <div className="container mx-auto p-4 flex flex-wrap items-center">
          <div className="w-full md:w-5/12 text-center p-4">
            <Svg404 />
          </div>
          <div className="w-full md:w-7/12 text-center md:text-left p-4">
            <div className="text-6xl font-medium">404</div>
            <div className="text-xl md:text-3xl font-medium mb-4">
              Oops. This page has gone missing.
            </div>
            <div className="text-lg mb-8">
              You may have mistyped the address or the page may have moved.
            </div>
            <Link to="/">
              <span className="border duration-300 hover:bg-white hover:text-primary-bg-dark border-white rounded p-4">
                Go Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
