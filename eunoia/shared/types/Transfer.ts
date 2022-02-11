export type TransferType = {
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
  expirationDate: Date;
  viewedDate: Date | undefined;
  statusUpdated: boolean;
  requestCode: number | undefined;
  expiredRequestCode: Date | undefined;
};

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
  expirationDate: Date;
  viewedDate: Date | undefined;
  statusUpdated: boolean;
};

export type TransferViewDto = {
  id: string;
  accessId: string;
  status: string;
  creatorIP: string;
  visitorIP: string[] | undefined;
  password: string;
  expirationDate: Date;
  viewedDate: Date | undefined;
};
