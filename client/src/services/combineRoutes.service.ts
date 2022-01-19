import { apiRoutes } from "../shared/enums/apiRoutes.enum";

const API_BASE = process.env.REACT_APP_URL_SERVER;

export const combineRoutes = (additionalRoute: apiRoutes): string => {
  return API_BASE + additionalRoute;
};
