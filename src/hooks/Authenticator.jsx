import { Navigate } from "react-router-dom";

function Authenticator({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default Authenticator;
