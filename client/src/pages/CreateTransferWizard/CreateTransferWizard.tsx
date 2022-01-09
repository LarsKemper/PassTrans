import React, { useState } from "react";
import { Transfer } from "../../shared/types/Transfer";
import { Navigate } from "react-router";

// Components
import UserDetails from "./Steps/UserDetails";
import PasswordInformation from "./Steps/PasswordInformation";
import TransferLink from "./Steps/TransferLink";
import Success from "./Steps/Success";

function CreateTransferWizard() {
  const [state, setState] = useState<Transfer>({
    step: 1,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    expirationDate: null,
  });

  function prevStep(): void {
    const step = state.step - 1;
    setState({ ...state, step: step });
  }

  function nextStep(): void {
    const step = state.step + 1;
    setState({ ...state, step: step });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    input: string
  ): void {
    setState({ ...state, [input]: e.target.value });
  }

  console.log();

  switch (state.step) {
    case 1:
      return (
        <UserDetails
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 2:
      return (
        <PasswordInformation
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 3:
      return (
        <TransferLink
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 4:
      return <Success step={state.step} prevStep={prevStep} />;
    default:
      return <Navigate to="/404" />;
  }
}

export default CreateTransferWizard;
