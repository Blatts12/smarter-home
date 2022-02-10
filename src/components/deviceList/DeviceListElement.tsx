import React from "react";
import { SmartDevice } from "../../models/SmartDevice";
import { useUiStore } from "../../store/uiStore";
import { connectionIcons, deviceIcons } from "../common/DeviceIcons";

interface DeviceListElementProps {
  device: SmartDevice;
  isSelected: boolean;
}

const DeviceListElement: React.FC<DeviceListElementProps> = ({
  device,
  isSelected,
}) => {
  const setDevice = useUiStore((state) => state.setSelectedDevice);
  const connectionClass = `dev-list-el--con__${device.connectionState}`;
  const selectedClass = isSelected ? "dev-list-el__selected" : "";

  return (
    <div
      className={`dev-list-el ${selectedClass}`}
      onClick={() => setDevice(device.id)}
      onKeyPress={() => setDevice(device.id)}
      tabIndex={0}
    >
      <p className="dev-list-el--name" title={device.name}>
        {device.name}
      </p>
      <p className={`dev-list-el--con ${connectionClass}`}>
        {connectionIcons[device.connectionState]}
      </p>
      <p className="dev-list-el--type">{deviceIcons[device.type]}</p>
    </div>
  );
};

export default React.memo(DeviceListElement);
