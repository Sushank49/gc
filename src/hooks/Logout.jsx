import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Logout() {
  useEffect(() => {
    // Clear any authentication tokens or user data here
    localStorage.setItem("isLoggedIn", "false");
  }, []);

  return (
    <div>
      <Navigate to={"/login"} replace />
    </div>
  );
}

export default Logout;
