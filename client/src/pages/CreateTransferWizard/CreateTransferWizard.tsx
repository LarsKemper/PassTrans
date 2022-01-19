import React, { useState } from "react";
import { Transfer, TransferDto } from "../../shared/types/Transfer.type";
import { Navigate } from "react-router";
import { createTransfer } from "../../api/transfer.api";
import { success, error } from "../../services/alert/alert.service";

// Components
import UserDetails from "./Steps/UserDetails-Wizard";
import PasswordInformation from "./Steps/PasswordInformation-Wizard";
import TransferLink from "./Steps/TransferLink-Wizard";
import Success from "./Steps/Success/Success-Wizard";

function CreateTransferWizard() {
  const [state, setState] = useState<Transfer>({
    step: 1,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    expirationDate: null,
    accessId: "",
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

  function setID(id: string) {
    setState({ ...state, accessId: id });
  }

  async function handleSubmit() {
    const transferDto: TransferDto = {
      accessId: state.accessId,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      country: state.country,
      expirationDate: state.expirationDate,
    };

    await createTransfer(transferDto)
      .then((res) => {
        if (res.status === 201) {
          nextStep();
          return success("The transfer was created successfully.");
        }
      })
      .catch((err) => {
        return error(err);
      });
  }

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
          setID={setID}
          values={state}
          submit={handleSubmit}
        />
      );
    case 4:
      return <Success step={state.step} />;
    default:
      return <Navigate to="/404" />;
  }
}

export default CreateTransferWizard;
