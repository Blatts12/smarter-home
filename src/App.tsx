import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DeviceList from "./components/deviceList/DeviceList";
import Navbar from "./components/navigation/Navbar";
import { useUiStore } from "./store/uiStore";

const getIsCompact = () => window.innerWidth <= 600;
const queryClient = new QueryClient();

const App: React.FC = () => {
  const setIsCompact = useUiStore((state) => state.setIsCompact);

  useEffect(() => {
    const onResize = () => {
      setIsCompact(getIsCompact());
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setIsCompact]);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <DeviceList />
    </QueryClientProvider>
  );
};

export default App;
