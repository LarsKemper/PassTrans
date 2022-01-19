import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const settings: object = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export function success(message: string): void {
  toast.success(message, settings);
}

export function error(message: string): void {
  if (message) {
    toast.error(message, settings);
  } else {
    toast.error("Something gone wrong!", settings);
  }
}

export function warning(message: string): void {
  toast.warn(message, settings);
}

export function info(message: string): void {
  toast.info(message, settings);
}
