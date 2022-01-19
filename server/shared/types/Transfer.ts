import mongoose from "mongoose";

export type TransferDto = {
  _id: string;
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

export type TransferViewDto = {
  id: string;
  accessId: string;
  creatorIP: string;
  visitorIP: string[] | undefined;
  password: string;
  expirationDate: string;
};
