import { UseQueryOptions } from "react-query";
import { SmartDevice } from "../models/SmartDevice";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchDevices = async () => {
  const response = await fetch(`${apiUrl}/devices`);
  if (response.ok) return response.json();

  throw new Error("Something went wrong!");
};

const fetchDevicesOptions: UseQueryOptions<SmartDevice[]> = {
  retry: 3,
};

export default {
  action: fetchDevices,
  options: fetchDevicesOptions,
};
