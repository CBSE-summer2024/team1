import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./main.css"
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return(
    <AuthProvider>
      <Router/>
    </AuthProvider>
);
}
const rootElement = document.getElementById("app")

if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)