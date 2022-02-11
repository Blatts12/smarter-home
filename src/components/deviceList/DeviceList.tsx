import React from "react";
import { useUiStore } from "../../store/uiStore";
import Portal from "../common/Portal";
import CompactList from "./CompactList";
import SideDeviceList from "./SideDeviceList";

const DeviceList: React.FC = () => {
  const isCompact = useUiStore((state) => state.isCompact);

  if (isCompact)
    return (
      <Portal mountId="com-dev-portal">
        <CompactList />
      </Portal>
    );

  return <SideDeviceList />;
};

export default DeviceList;
