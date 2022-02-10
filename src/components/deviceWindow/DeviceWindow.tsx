import React from "react";
import { useUiStore } from "../../store/uiStore";
import DraggableDeviceWindow from "./DraggableDeviceWindow";
import FullDeviceWindow from "./FullDeviceWindow";

const DeviceWindow: React.FC = () => {
  const isCompact = useUiStore((state) => state.isCompact);
  const showWindow = useUiStore((state) => state.showWindow);
  const selectedDevice = useUiStore((state) => state.selectedDevice);

  if (!selectedDevice || !showWindow) return null;

  //   if (isCompact && showWindow)
  return <FullDeviceWindow selectedDevice={selectedDevice} />;

  //   return <DraggableDeviceWindow selectedDevice={selectedDevice} />;
};

export default DeviceWindow;
