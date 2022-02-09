import { SmartDevice } from "./SmartDevice";

export interface SmartBulb extends SmartDevice {
  type: "bulb";
  isTurnedOn: boolean;
  brightness: number;
  color: string;
}

export interface SmartOutlet extends SmartDevice {
  type: "outlet";
  isTurnedOn: boolean;
  powerConsumption: number;
}

export interface SmartTemperatureSensor extends SmartDevice {
  type: "temperatureSensor";
  temperature: number;
}

export type SmartDeviceDetails =
  | SmartBulb
  | SmartOutlet
  | SmartTemperatureSensor;
