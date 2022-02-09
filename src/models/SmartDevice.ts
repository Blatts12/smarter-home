export type DeviceTypes = "bulb" | "outlet" | "temperatureSensor";
export type ConnectionStates = "connected" | "disconnected" | "poorConnection";

export interface SmartDevice {
  id: string;
  type: DeviceTypes;
  name: string;
  connectionState: ConnectionStates;
}
