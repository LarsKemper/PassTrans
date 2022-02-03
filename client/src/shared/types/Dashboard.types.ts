export type DashboardDto = {
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
