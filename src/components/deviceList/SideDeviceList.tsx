import React from "react";
import { useQuery } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import FetchDevices from "../../queries/FetchDevices";
import { useUiStore } from "../../store/uiStore";
import Loading from "../common/Loading";
import DeviceListElement from "./DeviceListElement";

const SideDeviceList: React.FC = () => {
  const selectedDevice = useUiStore((state) => state.selectedDevice);
  const { isLoading, data, isError } = useQuery<SmartDevice[]>(
    "devices",
    () => FetchDevices.action(),
    FetchDevices.options
  );

  return (
    <div className="side-dev">
      <h2 className="side-dev--header">Your Devices</h2>
      <div className="side-dev--list">
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

export default SideDeviceList;
