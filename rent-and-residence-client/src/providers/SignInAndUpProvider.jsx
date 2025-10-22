import { createContext, useState, useContext } from "react";

const SignInAndUpContext = createContext();

export const SignInAndUpProvider = ({ children }) => {
  const [isPopVisible, setIsPopVisible] = useState(false);
  return (
    <SignInAndUpContext.Provider value={{ isPopVisible, setIsPopVisible }}>
      {children}
    </SignInAndUpContext.Provider>
  );
};

// export default SignInAndUpProvider;

export const useSignInAndUp = () => useContext(SignInAndUpContext);
