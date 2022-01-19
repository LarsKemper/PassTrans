import mongoose from "mongoose";

export type TransferDto = {
  accessId: string;
  creatorIP: string;
  visitorIP: [string] | undefined;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  expirationDate: string;
};
