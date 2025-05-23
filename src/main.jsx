import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../styles/styles.scss";
// import App from "./App.jsx";
import AuthProvider from "./app/AuthContext.jsx";
import MainRoute from "./MainRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* <App /> */}
      <MainRoute />
    </AuthProvider>
  </StrictMode>
);
