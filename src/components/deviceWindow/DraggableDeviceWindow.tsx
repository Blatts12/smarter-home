import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";
import FetchDeviceDetails from "../../queries/FetchDeviceDetails";
import { useUiStore } from "../../store/uiStore";
import DraggableWindow from "../common/DraggableWindow";
import Loading from "../common/Loading";

interface DraggableDeviceWindowProps {
  selectedDevice: string;
}

const DraggableDeviceWindow: React.FC<DraggableDeviceWindowProps> = ({
  selectedDevice,
}) => {
  const queryClient = useQueryClient();
  const closeWindow = useUiStore((state) => state.closeWindow);
  const { isLoading, data, error } = useQuery<SmartDeviceDetails>(
    ["device", selectedDevice],
    async () => FetchDeviceDetails.action(selectedDevice),
    FetchDeviceDetails.options
  );

  useEffect(() => {
    if (data) {
      const state = queryClient.getQueryState<SmartDevice[]>("devices");
      const oldState = state?.data;
      if (oldState) {
        const deviceIndex = oldState.findIndex((dev) => dev.id === data.id);
        oldState[deviceIndex] = data;
        queryClient.setQueryData("devices", oldState);
      }
    }

    return () => {};
  }, [queryClient, data]);

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
