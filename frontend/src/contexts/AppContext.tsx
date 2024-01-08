import React from "react";

export type TToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR" | "WARNING" | "INFO";
};

type AppContext = {
  showToast: (toastMessage: TToastMessage) => void;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppContext.Provider value={{ showToast: () => {} }}>
      {children}
    </AppContext.Provider>
  );
};
