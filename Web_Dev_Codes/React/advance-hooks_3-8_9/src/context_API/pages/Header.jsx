import React from "react";
import UserContext from "../UserContext";

const Header = () => {
  return (
    <UserContext.Consumer>
      {(value) => {
        const { username, theme, toggleTheme } = value;

        return (
          <header className="header">
            <h1>Context Demo</h1>
            <div>
              <span>Hello, {username} 👋</span>
              <button onClick={toggleTheme} className="theme-btn">
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
              </button>
            </div>
          </header>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Header;
