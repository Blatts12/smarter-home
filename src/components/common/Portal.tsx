import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  mountId: string;
}

const Portal: React.FC<PortalProps> = ({ children, mountId }) => {
  const mount = document.getElementById(mountId);
  const el = document.createElement("div");

  useEffect(() => {
    if (mount) mount.appendChild(el);
    return () => {
      if (mount) mount.removeChild(el);
    };
  }, [mount, el]);

  return createPortal(children, el);
};

export default Portal;
