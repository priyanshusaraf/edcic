import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoading: false,
    currentPage: "",
    navigationOpen: false,
  });

  const updateState = (updates) => {
    setState((prevState) => ({ ...prevState, ...updates }));
  };

  const value = {
    state,
    setState,
    updateState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
