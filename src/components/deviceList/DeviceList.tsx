import React from "react";
import { useUiStore } from "../../store/uiStore";
import Portal from "../common/Portal";
import CompactDeviceList from "./CompactDeviceList";
import SideDeviceList from "./SideDeviceList";

const DeviceList: React.FC = () => {
  const isCompact = useUiStore((state) => state.isCompact);

  if (isCompact)
    return (
      <Portal mountId="com-dev-portal">
        <CompactDeviceList />
      </Portal>
    );

  return <SideDeviceList />;
};

export default DeviceList;
