import React from "react";
import { useQuery } from "react-query";
import { SmartDeviceDetails } from "../../models/SmartDeviceDetails";
import Loading from "../common/Loading";

const apiUrl = import.meta.env.VITE_API_URL;

interface DraggableDeviceWindowProps {
  selectedDevice: string;
}

const DraggableDeviceWindow: React.FC<DraggableDeviceWindowProps> = ({
  selectedDevice,
}) => {
  const { isLoading, data, error } = useQuery<SmartDeviceDetails>(
    `device_${selectedDevice}`,
    () =>
      fetch(`${apiUrl}/devices/${selectedDevice}`).then((res) => res.json()),
    { refetchInterval: 10000 }
  );

  return (
    <div>
      <p>Draggable</p>
      {isLoading ? <Loading /> : <>{data?.type}</>}
    </div>
  );
};

export default DraggableDeviceWindow;
