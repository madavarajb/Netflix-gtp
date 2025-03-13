import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../Utils/UserSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        setUser(user);
        dispatch(adduser({ uid, email, displayName }));
      } else {
        setUser(null);
        dispatch(removeuser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
