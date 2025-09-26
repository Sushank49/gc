import styles from "./StudentPortal.module.css";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import { Outlet, useLocation } from "react-router-dom";
import Edit from "../components/Edit";

function StudentPortal() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className={styles.container}>
      <Sidebar />
      {location.pathname === "/sportal/dashboard" ? <Dashboard /> : <Edit />}
      <Outlet />
    </div>
  );
}

export default StudentPortal;
