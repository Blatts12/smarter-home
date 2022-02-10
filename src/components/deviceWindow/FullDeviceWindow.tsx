import React from "react";
import { BsX } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { useQuery } from "react-query";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";
import FetchDeviceDetails from "../../queries/FetchDeviceDetails";
import { useUiStore } from "../../store/uiStore";
import { deviceIcons } from "../common/DeviceIcons";
import Loading from "../common/Loading";
import DeviceInfo from "./DeviceInfo";

interface FullDeviceWindowProps {
  selectedDevice: string;
}

const FullDeviceWindow: React.FC<FullDeviceWindowProps> = ({
  selectedDevice,
}) => {
  const closeWindow = useUiStore((state) => state.closeWindow);
  const { isLoading, data, error } = useQuery<SmartDeviceDetails>(
    ["device", selectedDevice],
    async () => FetchDeviceDetails.action(selectedDevice),
    FetchDeviceDetails.options
  );

  return (
    <div className="full-window">
      <div className="full-window--nav">
        <button className="button button__icon">
          <HiPencil />
        </button>
        <button className="button button__icon" onClick={closeWindow}>
          <BsX />
        </button>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <>
            {deviceIcons[data.type]}
            <div className="device-info">
              <h2>{data.name}</h2>
              <div className="device-info--item">
                <p className="device-info--item--title">Connection state</p>
                <p className="device-info--item--value">
                  {data.connectionState}
                </p>
              </div>
              <div className="device-info--item">
                <p className="device-info--item--title">Device type</p>
                <p className="device-info--item--value">{data.type}</p>
              </div>
              <DeviceInfo deviceDetails={data} />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default FullDeviceWindow;
