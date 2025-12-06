import { useState } from "react";

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <UserProvider value={{ user, login, logout }}>
        {children}
    </UserProvider>
  );
}
