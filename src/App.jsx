import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import StudentPortal from "./pages/StudentPortal";
import Edit from "./components/Edit";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/sportal" element={<StudentPortal />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="edit" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
