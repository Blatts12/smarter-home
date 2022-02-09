import React from "react";
import { SmartDevice } from "../../models/SmartDevice";

interface DeviceListElementProps {
  device: SmartDevice;
}

const DeviceListElement: React.FC<DeviceListElementProps> = ({ device }) => {
  return <div>{device.name}</div>;
};

export default React.memo(DeviceListElement);
