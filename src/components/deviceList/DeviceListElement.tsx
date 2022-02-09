import React from "react";
import { SmartDevice } from "../../models/SmartDevice";

interface DeviceListElementProps {
  device: SmartDevice;
}

const DeviceListElement: React.FC<DeviceListElementProps> = ({ device }) => {
  return (
    <div className="device-list-element">
      <p className="device-list-element--name">{device.name}</p>
      <p className="device-list-element--connection">
        {device.connectionState}
      </p>
      <p className="device-list-element--type">{device.type}</p>
    </div>
  );
};

export default React.memo(DeviceListElement);
