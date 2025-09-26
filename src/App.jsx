import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import StudentPortal from "./pages/StudentPortal";
import Edit from "./components/Edit";
import Dashboard from "./components/Dashboard";
import Authenticator from "./hooks/Authenticator";
import Logout from "./hooks/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/sportal"
            element={
              <Authenticator>
                <StudentPortal />
              </Authenticator>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="edit" element={<Edit />} />
            <Route path="profile" element={<h1>Profile Page</h1>} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1 style={{ fontSize: "4.8rem" }}>404 Not Found 😱</h1>
                <button onClick={() => (window.location.href = "/login")}>
                  Go to Login
                </button>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
