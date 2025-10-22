import { createContext, useContext, useState } from "react";

const ComparisonPopupContext = createContext();

export const ComparisonPopupProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <ComparisonPopupContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </ComparisonPopupContext.Provider>
  );
};

export const usePopup = () => useContext(ComparisonPopupContext);
