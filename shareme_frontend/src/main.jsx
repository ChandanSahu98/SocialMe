import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_PUBLIC_GOOGLE_API_TOKEN}`}
      >
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
