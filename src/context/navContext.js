import React, { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavContextProvider({ children }) {
  const [nav, setNav] = useState(false);

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
}
