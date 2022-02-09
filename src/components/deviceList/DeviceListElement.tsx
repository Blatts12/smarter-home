import React from "react";
import { SmartDevice } from "../../models/SmartDevice";
import { connectionIcons, deviceIcons } from "./ListIcons";

interface DeviceListElementProps {
  device: SmartDevice;
}

const DeviceListElement: React.FC<DeviceListElementProps> = ({ device }) => {
  const connectionClass = `dev-list-el--con__${device.connectionState}`;

  return (
    <div className="dev-list-el">
      <p className="dev-list-el--name">{device.name}</p>
      <p className={`dev-list-el--con ${connectionClass}`}>
        {connectionIcons[device.connectionState]}
      </p>
      <p className="dev-list-el--type">{deviceIcons[device.type]}</p>
    </div>
  );
};

export default React.memo(DeviceListElement);
