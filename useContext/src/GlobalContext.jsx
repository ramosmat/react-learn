import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [cont, setCont] = React.useState(0);

  function contarUm() {
    setCont(cont + 1);
  }

  return (
    <GlobalContext.Provider value={{ cont, contarUm }}>
      {children}
    </GlobalContext.Provider>
  );
};
