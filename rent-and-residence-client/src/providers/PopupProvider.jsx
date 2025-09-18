import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <PopupContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
