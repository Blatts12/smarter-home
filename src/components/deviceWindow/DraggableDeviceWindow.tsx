import React from "react";
import { useQuery } from "react-query";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";
import fetchDeviceDetails from "../../queries/fetchDeviceDetails";
import { useUiStore } from "../../store/uiStore";
import DraggableWindow from "../common/DraggableWindow";
import Loading from "../common/Loading";

interface DraggableDeviceWindowProps {
  selectedDevice: string;
}

const DraggableDeviceWindow: React.FC<DraggableDeviceWindowProps> = ({
  selectedDevice,
}) => {
  const closeWindow = useUiStore((state) => state.closeWindow);
  const { isLoading, data, error } = useQuery<SmartDeviceDetails>(
    ["device", selectedDevice],
    async () => fetchDeviceDetails.action(selectedDevice),
    fetchDeviceDetails.options
  );

  return (
    <div className="drag-device-area">
      <DraggableWindow id="device-window">
        <button onClick={closeWindow}>Close</button>
        {isLoading ? <Loading /> : <>{data?.type}</>}
      </DraggableWindow>
    </div>
  );
};

export default DraggableDeviceWindow;
