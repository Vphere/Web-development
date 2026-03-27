import React from "react";
import UserContext from "../UserContext";

const Footer = () => {
  return (
    <UserContext.Consumer>
      {(value) => {
        const { username, theme } = value;

        return (
          <footer className="footer">
            <p>
              © 2026 | Logged in as <strong>{username}</strong> | Theme: {theme}
            </p>
          </footer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Footer;