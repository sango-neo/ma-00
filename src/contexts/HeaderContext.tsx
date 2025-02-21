"use client";

import { createContext, useContext, useState, useEffect } from "react";

type HeaderContextType = {
  headerLoaded: boolean;
  setHeaderLoaded: (loaded: boolean) => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [headerLoaded, setHeaderLoaded] = useState(false);

  return (
    <HeaderContext.Provider value={{ headerLoaded, setHeaderLoaded }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}
