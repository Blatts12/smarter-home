import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import { useUiStore } from "../../store/uiStore";
import Loading from "../common/Loading";
import DeviceListElement from "./DeviceListElement";

const apiUrl = import.meta.env.VITE_API_URL;

const DeviceList: React.FC = () => {
  const selectedDevice = useUiStore((state) => state.selectedDevice);
  const { isLoading, data, error } = useQuery<SmartDevice[]>("devices", () =>
    fetch(`${apiUrl}/devices`).then((res) => res.json())
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
              isSelected={selectedDevice === device.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DeviceList;
