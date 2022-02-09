import React from "react";
import { useQuery } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import DeviceListElement from "./DeviceListElement";

const apiUrl = import.meta.env.VITE_API_URL;

const DeviceList: React.FC = () => {
  const { isLoading, data, error } = useQuery<SmartDevice[]>("devices", () =>
    fetch(`${apiUrl}/devices`).then((res) => res.json())
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>{`An error has occurred: ${(error as any).message}`}</>;

  return (
    <div className="device-list">
      <h2 className="device-list--header">Your Devices</h2>
      {data?.map((device) => (
        <DeviceListElement key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DeviceList;
