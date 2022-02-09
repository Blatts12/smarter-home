import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DeviceList from "./components/deviceList/DeviceList";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DeviceList />
    </QueryClientProvider>
  );
};

export default App;
