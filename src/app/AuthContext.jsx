import { createContext, useContext, useEffect, useState } from "react";

const AuthCtx = createContext();
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored?.email) setCurrentUser(stored.email);
  }, []);
  function login(body) {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (
      stored &&
      stored.email === body.email &&
      stored.password === body.password
    ) {
      setCurrentUser(body.email);
      return true;
    }
    return false;
  }
  function signup(body) {
    localStorage.setItem("user", JSON.stringify(body));

    setCurrentUser(body.email);
  }
  function logout() {
    // localStorage.removeItem("user")
    setCurrentUser(null);
  }
  return (
    <AuthCtx.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
