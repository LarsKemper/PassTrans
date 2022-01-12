import React, { useState } from "react";
import Confirmation from "./states/Confirmation-Transfer";
import ViewPassword from "./states/ViewPassword-Transfer";

function ViewTransfer() {
  // TODO: Get transfer information
  const [state, setState] = useState<boolean>(false);

  function viewPassword(): void {
    setState(true);
  }

  if (state) {
    return <ViewPassword />;
  } else {
    return <Confirmation viewPassword={viewPassword} />;
  }
}

export default ViewTransfer;
