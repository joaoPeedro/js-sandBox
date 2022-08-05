import React, { createContext, useState, useMemo } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [selectedUser, setSelectedUser] = useState(null);

  // to avoid unnecessary renders
  const providerValue = useMemo(
    () => ({ selectedUser, setSelectedUser }),
    [selectedUser, setSelectedUser]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
