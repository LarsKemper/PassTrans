import React, { useState } from "react";
import Confirmation from "./states/Confirmation-Transfer";
import ViewPassword from "./states/ViewPassword-Transfer";
import TransferBlocked from "./states/TransferBlocked";

function ViewTransfer() {
  // TODO: Get transfer information
  const [state, setState] = useState<boolean>(false);
  const blocked = false;

  function viewPassword(): void {
    setState(true);
  }

  if (blocked) {
    return <TransferBlocked />;
  } else if (state) {
    return <ViewPassword />;
  } else {
    return <Confirmation viewPassword={viewPassword} />;
  }
}

export default ViewTransfer;
