import { UseQueryOptions } from "react-query";
import { SmartDeviceDetails } from "../models/SmartDeviceDetails";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchDeviceDetails = async (id: string) => {
  const response = await fetch(`${apiUrl}/devices/${id}`);
  if (response.ok) return response.json();

  throw new Error("Something went wrong!");
};

const fetchDeviceDetailsOptions: UseQueryOptions<SmartDeviceDetails> = {
  refetchInterval: 10000,
  retry: 3,
};

export default {
  action: fetchDeviceDetails,
  options: fetchDeviceDetailsOptions,
};
