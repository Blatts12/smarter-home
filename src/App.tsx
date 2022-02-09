import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DeviceList from "./components/deviceList/DeviceList";
import Navbar from "./components/navigation/Navbar";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <DeviceList />
    </QueryClientProvider>
  );
};

export default App;
