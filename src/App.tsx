import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DeviceList from "./components/deviceList/DeviceList";
import DeviceWindow from "./components/deviceWindow/DeviceWindow";
import Navbar from "./components/navigation/Navbar";
import { useUiStore } from "./store/uiStore";
import { getIsCompact } from "./utils/getIsCompact";
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
  }, [setIsCompact, getIsCompact]);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <DeviceList />
      <DeviceWindow />
    </QueryClientProvider>
  );
};

export default App;
