import { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [location]);

  return <ScrollContext.Provider>{children}</ScrollContext.Provider>;
};
