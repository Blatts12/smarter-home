import React from "react";
import { useUiStore } from "../../store/uiStore";
import DraggableDeviceWindow from "./DraggableDeviceWindow";
import CompactDeviceWindow from "./CompactDeviceWindow";
import SelectDevice from "./SelectDevice";

const DeviceWindow: React.FC = () => {
  const isCompact = useUiStore((state) => state.isCompact);
  const showWindow = useUiStore((state) => state.showWindow);
  const selectedDevice = useUiStore((state) => state.selectedDevice);

  if (!selectedDevice || !showWindow) return <SelectDevice />;

  if (isCompact && showWindow)
    return <CompactDeviceWindow selectedDevice={selectedDevice} />;

  return <DraggableDeviceWindow selectedDevice={selectedDevice} />;
};

export default DeviceWindow;
