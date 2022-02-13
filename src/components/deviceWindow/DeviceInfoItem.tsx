import React from "react";

interface DeviceInfoItemProps {
  title: string;
  value: string;
  valueStyle?: React.CSSProperties;
}

const DeviceInfoItem: React.FC<DeviceInfoItemProps> = ({
  title,
  value,
  valueStyle,
}) => {
  return (
    <div className="dev-info--item">
      <p className="dev-info--item--title">{title}</p>
      <p className="dev-info--item--value" style={valueStyle}>
        {value}
      </p>
    </div>
  );
};

export default DeviceInfoItem;
