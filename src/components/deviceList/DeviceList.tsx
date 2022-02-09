import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import Loading from "../common/Loading";
import DeviceListElement from "./DeviceListElement";

const apiUrl = import.meta.env.VITE_API_URL;

const DeviceList: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>();
  const { isLoading, data, error } = useQuery<SmartDevice[]>("devices", () =>
    fetch(`${apiUrl}/devices`).then((res) => res.json())
  );

  const setDevice = useCallback(
    (id: string) => {
      setSelectedDevice(id);
    },
    [setSelectedDevice]
  );

  return (
    <div className="dev">
      <h2 className="dev--header">Your Devices</h2>
      <div className="dev--list">
        {isLoading ? (
          <Loading />
        ) : (
          data &&
          data.map((device) => (
            <DeviceListElement
              key={`${device.id}-device`}
              device={device}
              setDevice={setDevice}
              isSelected={selectedDevice === device.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DeviceList;
