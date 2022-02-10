import React from "react";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";

interface DeviceInfoProps {
  deviceDetails: SmartDeviceDetails;
}

const DeviceInfo: React.FC<DeviceInfoProps> = ({ deviceDetails }) => {
  switch (deviceDetails.type) {
    case "bulb":
      return (
        <>
          <div className="device-info--item">
            <p className="device-info--item--title">Color</p>
            <p
              className="device-info--item--value"
              style={{
                color: deviceDetails.color,
                filter: `drop-shadow(0 0 8px ${deviceDetails.color})`,
              }}
            >
              {deviceDetails.color}
            </p>
          </div>
          <div className="device-info--item">
            <p className="device-info--item--title">Is Turned On?</p>
            <p className="device-info--item--value">
              {deviceDetails.isTurnedOn ? "Yes" : "No"}
            </p>
          </div>
          <div className="device-info--item">
            <p className="device-info--item--title">Brightness</p>
            <p className="device-info--item--value">
              {deviceDetails.brightness}%
            </p>
          </div>
        </>
      );
    case "outlet":
      return (
        <>
          <div className="device-info--item">
            <p className="device-info--item--title">Is Turned On?</p>
            <p className="device-info--item--value">
              {deviceDetails.isTurnedOn ? "Yes" : "No"}
            </p>
          </div>
          <div className="device-info--item">
            <p className="device-info--item--title">Power Consumption</p>
            <p className="device-info--item--value">
              {deviceDetails.powerConsumption} Watts
            </p>
          </div>
        </>
      );
    case "temperatureSensor":
      return (
        <>
          <div className="device-info--item">
            <p className="device-info--item--title">Temperature</p>
            <p className="device-info--item--value">
              {deviceDetails.temperature}°C
            </p>
          </div>
        </>
      );
    default:
      return <h3>Unsupported Device</h3>;
  }
};

export default DeviceInfo;
