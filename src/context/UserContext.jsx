import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("amini-auth");
  };
  const login = (user) => {
    setUser(user);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("amini-auth", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const localStorageUser = localStorage.getItem("amini-auth");
    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error("useUser must be inside UserProvider");
  }

  return ctx;
};
