import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { useQuery, useQueryClient } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";
import FetchDeviceDetails from "../../queries/FetchDeviceDetails";
import { useUiStore } from "../../store/uiStore";
import { deviceIcons } from "../common/DeviceIcons";
import Loading from "../common/Loading";
import DeviceInfo from "./DeviceInfo";

interface CompactDeviceWindowProps {
  selectedDevice: string;
}

const CompactDeviceWindow: React.FC<CompactDeviceWindowProps> = ({
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
    <div className="full-window">
      <div className="full-window--nav">
        <button className="button button__icon">
          <HiPencil />
        </button>
        <button className="button button__icon" onClick={closeWindow}>
          <BsX />
        </button>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <>
            {deviceIcons[data.type]}
            <div className="dev-info">
              <h2>{data.name}</h2>
              <DeviceInfo deviceDetails={data} />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default CompactDeviceWindow;
