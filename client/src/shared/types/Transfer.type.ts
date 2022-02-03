export type Transfer = {
  step: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  country: string;
  expirationDate: string | null;
  accessId: string;
};

export type TransferDto = {
  accessId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  expirationDate: string | null;
};

export type TransferView = {
  id: string;
  accessId: string;
  creatorIP: string;
  visitorIP: string[] | undefined;
  password: string;
  expirationDate: string;
};
