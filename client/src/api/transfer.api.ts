import axios, { AxiosResponse } from "axios";
import { TransferDto } from "../shared/types/Transfer.type";
import { combineRoutes } from "../services/combineRoutes.service";
import { apiRoutes } from "../shared/enums/apiRoutes.enum";

export const createTransfer = async (
  transfer: TransferDto
): Promise<AxiosResponse> => {
  return await axios.post(combineRoutes(apiRoutes.CREATE_TRANSFER), transfer);
};

export const getTransfer = async (id: string): Promise<AxiosResponse> => {
  return await axios.get(combineRoutes(apiRoutes.GET_TRANSFER, id));
};

export const setTransferViewed = async (id: string): Promise<AxiosResponse> => {
  return await axios.put(combineRoutes(apiRoutes.SET_TRANSFER_VIEWED, id));
};
