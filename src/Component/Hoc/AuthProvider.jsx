import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireebaasdse";
import { useContext } from "react";
     const AuthContext = createContext();
 const AuthContextDispatcher = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => setUser(user));
  console.log(user);
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider
        value={setUser}
      >
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
export default AuthProvider;
