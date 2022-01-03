import React, { useState, createContext } from "react";
import Login from "./login";
import User from "./User";

export const AppContext = createContext(null);
function contextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <>
      <AppContext.Provider value={{ username, setUsername }} />
      <Login />
      <User />
      <AppContext.Provider />
    </>
  );
}
