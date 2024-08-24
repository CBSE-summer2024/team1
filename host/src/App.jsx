import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./main.css"
const App = () => {
  return(<Router/>);
}
const rootElement = document.getElementById("app")

if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)