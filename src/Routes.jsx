// import { NavBar } from "./Layout/NavBar";
// import "./App.css";
// import Hero from "./pages/Hero";
// import Home from "./pages/Home";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import { useAuth } from "./app/AuthContext";
import App from "./App";
import Login from "../src/pages/Login";

function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth" element={<Navigate to="/login" replace />} />
          <Route element={<PrivateRoute />}>
            <Route path="/app" element={<App />} />
          </Route>
          <Route path="*" element={<AuthGate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
const AuthGate = () => {
  const { currentUser } = useAuth();
  return <Navigate to={currentUser ? "/login" : "/auth"} replace />;
};

export default Routing;
