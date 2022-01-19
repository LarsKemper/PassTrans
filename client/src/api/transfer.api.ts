import axios, { AxiosResponse } from "axios";
import { TransferDto } from "../shared/types/Transfer.type";
import { combineRoutes } from "../services/combineRoutes.service";
import { apiRoutes } from "../shared/enums/apiRoutes.enum";

export const createTransfer = async (
  transfer: TransferDto
): Promise<AxiosResponse> => {
  return await axios.post(combineRoutes(apiRoutes.CREATE_TRANSFER), transfer);
};
