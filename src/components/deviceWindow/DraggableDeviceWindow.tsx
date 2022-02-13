import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";
import { useQuery, useQueryClient } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";
import FetchDeviceDetails from "../../queries/FetchDeviceDetails";
import { useUiStore } from "../../store/uiStore";
import { deviceIcons } from "../common/DeviceIcons";
import DraggableWindow from "../common/DraggableWindow";
import Loading from "../common/Loading";
import DeviceInfo from "./DeviceInfo";

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
    <div className="drag-dev-area">
      {data && deviceIcons[data.type]}
      <DraggableWindow id="dev-window">
        <div className="dev-window">
          {isLoading ? (
            <Loading />
          ) : (
            data && (
              <>
                <div className="dev-info">
                  <div className="dev-window--header">
                    <h2>{data?.name}</h2>
                    <button
                      onClick={closeWindow}
                      className="button button__icon"
                    >
                      <BsX />
                    </button>
                  </div>
                  <DeviceInfo deviceDetails={data} />
                </div>
              </>
            )
          )}
        </div>
      </DraggableWindow>
    </div>
  );
};

export default DraggableDeviceWindow;
