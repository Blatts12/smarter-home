import React from "react";
import { BsX } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { useQuery } from "react-query";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";
import { useUiStore } from "../../store/uiStore";
import { deviceIcons } from "../common/DeviceIcons";
import Loading from "../common/Loading";
import DeviceInfo from "./DeviceInfo";

const apiUrl = import.meta.env.VITE_API_URL;

interface FullDeviceWindowProps {
  selectedDevice: string;
}

const FullDeviceWindow: React.FC<FullDeviceWindowProps> = ({
  selectedDevice,
}) => {
  const closeWindow = useUiStore((state) => state.closeWindow);
  const { isLoading, data, error } = useQuery<SmartDeviceDetails>(
    `device_${selectedDevice}`,
    () =>
      fetch(`${apiUrl}/devices/${selectedDevice}`).then((res) => res.json()),
    { refetchInterval: 10000 }
  );

  return (
    <div className="full-window">
      <div className="full-window--nav">
        <button className="full-window--button full-window--edit">
          <HiPencil />
        </button>
        <button className="full-window--button" onClick={closeWindow}>
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
