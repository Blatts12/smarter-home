import React from "react";
import {
  SmartBulb,
  SmartDeviceDetails,
  SmartOutlet,
  SmartTemperatureSensor,
} from "../../models/SmartDeviceDetails";
import DeviceInfoItem from "./DeviceInfoItem";

const BulbInfo = (deviceDetails: SmartBulb) => (
  <>
    <DeviceInfoItem
      title="Is Turned On?"
      valueStyle={{
        color: deviceDetails.color,
        filter: `drop-shadow(0 0 8px ${deviceDetails.color})`,
      }}
      value={deviceDetails.color}
    />
    <DeviceInfoItem
      title="Is Turned On?"
      value={deviceDetails.isTurnedOn ? "Yes" : "No"}
    />
    <DeviceInfoItem title="Brightness" value={`${deviceDetails.brightness}%`} />
  </>
);

const OutletInfo = (deviceDetails: SmartOutlet) => (
  <>
    <DeviceInfoItem
      title="Is Turned On?"
      value={deviceDetails.isTurnedOn ? "Yes" : "No"}
    />
    <DeviceInfoItem
      title="Power Consumption"
      value={`${deviceDetails.powerConsumption}W`}
    />
  </>
);

const TemperatureSensorInfo = (deviceDetails: SmartTemperatureSensor) => (
  <DeviceInfoItem
    title="Temperature"
    value={`${deviceDetails.temperature}°C`}
  />
);

interface DeviceInfoProps {
  deviceDetails: SmartDeviceDetails;
}

const DeviceInfo: React.FC<DeviceInfoProps> = ({ deviceDetails }) => {
  return (
    <>
      <DeviceInfoItem
        title="Connection"
        value={deviceDetails.connectionState}
      />
      <DeviceInfoItem title="Device" value={deviceDetails.type} />
      {deviceDetails.type === "bulb" ? (
        BulbInfo(deviceDetails)
      ) : deviceDetails.type === "outlet" ? (
        OutletInfo(deviceDetails)
      ) : deviceDetails.type === "temperatureSensor" ? (
        TemperatureSensorInfo(deviceDetails)
      ) : (
        <h3>Unsupported Device</h3>
      )}
    </>
  );
};

export default React.memo(DeviceInfo);
