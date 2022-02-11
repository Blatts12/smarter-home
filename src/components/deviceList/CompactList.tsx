import React, { useEffect } from "react";
import { BsListUl, BsX } from "react-icons/bs";
import { useQuery } from "react-query";
import { SmartDevice } from "../../models/SmartDevice";
import FetchDevices from "../../queries/FetchDevices";
import { useUiStore } from "../../store/uiStore";
import Loading from "../common/Loading";
import DeviceListElement from "./DeviceListElement";

const CompactList: React.FC = () => {
  const selectedDevice = useUiStore((state) => state.selectedDevice);
  const showCompactList = useUiStore((state) => state.showCompactList);
  const closeCompactList = useUiStore((state) => state.closeCompactList);
  const openCompactList = useUiStore((state) => state.openCompactList);
  const { isLoading, data, isError } = useQuery<SmartDevice[]>(
    "devices",
    () => FetchDevices.action(),
    FetchDevices.options
  );

  useEffect(() => {
    return () => {
      closeCompactList();
    };
  }, []);

  if (!showCompactList)
    return (
      <button
        className="open-list button button__icon"
        onClick={openCompactList}
      >
        <BsListUl />
      </button>
    );

  return (
    <div className="com-dev">
      <div className="com-dev--header">
        <h2>Your Devices</h2>
        <button className="button button__icon" onClick={closeCompactList}>
          <BsX />
        </button>
      </div>
      <div className="com-dev--list">
        {isLoading ? (
          <Loading />
        ) : (
          data &&
          data.map((device) => (
            <DeviceListElement
              key={`${device.id}-device`}
              device={device}
              isSelected={selectedDevice === device.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CompactList;
