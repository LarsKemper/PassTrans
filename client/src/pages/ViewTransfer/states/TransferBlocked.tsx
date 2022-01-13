import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Svg } from "../../../assets/svg/400 Error Bad Request-bro (1).svg";
import TransferBlockedItem from "../../../components/ViewPassword/TransferBlockedItem";

function TransferBlocked() {
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
                  <h3 className="text-3xl">Oops. This transfer is invalid!</h3>
                  <h5 className="text-lg mb-5">
                    This message may have the following causes:
                  </h5>
                  <div className="space-y-4">
                    <TransferBlockedItem
                      short={"Transfer already used."}
                      long={
                        "The password has already been displayed. Therefore it has been deleted and the link to the password is no longer valid."
                      }
                    />
                    <TransferBlockedItem
                      short={"The transfer has expired after the set time."}
                      long={
                        "When creating a new transfer, an expiration date is defined. When this date is expired the transfer is deleted."
                      }
                    />
                    <TransferBlockedItem
                      short={"You have received an incorrect link."}
                      long={
                        "Transfers are identified and called by ID. If the link contains an incorrect ID, the transfer cannot be displayed."
                      }
                    />
                    <TransferBlockedItem
                      short={
                        "The creator of the transfer has blocked this link."
                      }
                      long={
                        "The creator of a transfer has at any time the possibility to delete a transfer or to prevent access to it."
                      }
                    />
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

export default TransferBlocked;
