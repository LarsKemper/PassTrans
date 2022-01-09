import { Transfer } from "../types/Transfer";

export interface TransferStep {
  prevStep(): void;
  nextStep(): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>, input: any): void;
  values: Transfer;
}
