import React, { useState } from "react";
import UserContext from "./context_API/UserContext";
import "./App.css";
import Page from "./Page";

const App = () => {
  const [username] = useState("Vaidik");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <UserContext.Provider value={{ username, theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Page/>
      </div>
    </UserContext.Provider>
  );
};

export default App;
