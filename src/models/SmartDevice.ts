export type DeviceTypes = "bulb" | "outlet" | "temperatureSensor";

export interface SmartDevice {
  id: string;
  type: DeviceTypes;
  name: string;
  connectionState: string;
}
