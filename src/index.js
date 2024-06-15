import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Find the root element
const rootElement = document.getElementById("app");

// Create a root
const root = createRoot(rootElement);

// Render the App component
root.render(<App />);
