import { createContext, useContext, useState } from "react";
import { RenderMenu, RenderRoutes } from "../components/header/Header.js";
//import Header from "../components/header/Header.js";

import Footer from "../components/footer/Footer.js";
// ONLY HEADER (NAVIGATION INCLUDED) AND FOOTER ARE NEEDED

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userName, password) => {
    // Make a call to the authentication API to check the username

    return new Promise((resolve, reject) => {
      if (password === "password") {
        setUser({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Incorrect password");
      }
    });
  };
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  console.log(RenderRoutes);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        {//<Header />
        }
        <RenderMenu />
        <RenderRoutes />
        <Footer/>
      </>
    </AuthContext.Provider>
  );
};
