import { apiRoutes } from "../shared/enums/apiRoutes.enum";

const API_BASE = process.env.REACT_APP_URL_SERVER;

export const combineRoutes = (
  additionalRoute: apiRoutes,
  token?: string
): string => {
  let route = API_BASE + additionalRoute;
  if (token) {
    route = route + token;
  }
  return route;
};
