import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({});

  const updateRegistrationData = (data) => {
    setRegistrationData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <RegistrationContext.Provider value={{ registrationData, updateRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
