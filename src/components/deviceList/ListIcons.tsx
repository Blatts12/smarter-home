import {
  BsLightbulbFill,
  BsThermometerHalf,
  BsWifi,
  BsWifi2,
  BsWifiOff,
} from "react-icons/bs";
import { MdOutlet } from "react-icons/md";
import { ConnectionStates, DeviceTypes } from "../../models/SmartDevice";

export const deviceIcons: {
  [key in DeviceTypes]: JSX.Element;
} = {
  bulb: <BsLightbulbFill />,
  outlet: <MdOutlet />,
  temperatureSensor: <BsThermometerHalf />,
};

export const connectionIcons: {
  [key in ConnectionStates]: JSX.Element;
} = {
  connected: <BsWifi />,
  disconnected: <BsWifiOff />,
  poorConnection: <BsWifi2 />,
};
