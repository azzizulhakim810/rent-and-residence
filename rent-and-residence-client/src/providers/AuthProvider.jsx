import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = () => {
  return (
    <div>
      <h1>AuthProvider</h1>
    </div>
  );
};

export default AuthProvider;
