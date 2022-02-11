import axios, { AxiosResponse } from "axios";
import { combineRoutes } from "../services/combineRoutes.service";
import { apiRoutes } from "../shared/enums/apiRoutes.enum";

export const getDashboard = async (id: string): Promise<AxiosResponse> => {
  return await axios.get(combineRoutes(apiRoutes.GET_DASHBOARD, id));
};

export const requestVerification = async (
  id: string
): Promise<AxiosResponse> => {
  return await axios.post(
    combineRoutes(apiRoutes.REQUEST_DASHBOARD_VERIFICATION),
    { accessId: id }
  );
};

export const verifyRequestCode = async (
  id: string,
  codeRef: string
): Promise<AxiosResponse> => {
  return await axios.post(combineRoutes(apiRoutes.VERIFIY_DASHBOARD_REQUEST), {
    accessId: id,
    code: codeRef,
  });
};

export const changeStatus = async (
  id: string,
  newStatus: string
): Promise<AxiosResponse> => {
  return await axios.put(combineRoutes(apiRoutes.CHANGE_TRANSFER_STATUS, id), {
    newStatus: newStatus,
  });
};
