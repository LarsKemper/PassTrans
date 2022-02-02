import { TransferStatus } from "./../../../client/src/shared/enums/TransferStatus.enum";
import mongoose from "mongoose";

export type TransferDto = {
  id: string;
  accessId: string;
  status: string;
  creatorIP: string;
  visitorIP: [string] | undefined;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  expirationDate: string;
  isViewed: boolean;
  viewedDate: Date | undefined;
};

export type TransferViewDto = {
  id: string;
  accessId: string;
  status: string;
  creatorIP: string;
  visitorIP: string[] | undefined;
  password: string;
  expirationDate: string;
  isViewed: boolean;
};
