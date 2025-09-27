import { Outlet, useLocation } from "react-router-dom";
import studentData from "../assets/StudentData.json";

import styles from "./StudentPortal.module.css";

import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Edit from "../components/Edit";
import { useEffect, useState } from "react";

// Retrieve student data
function getStudentById(id) {
  const student = JSON.parse(JSON.stringify(studentData));
  // console.log(student);
  return {
    studentDetails: student["Student Table"]?.filter(
      (s) => s["Student id"] === id
    ),
    feedback: student["Feedbacks"]?.filter(
      (feedback) => feedback["Student id"] === id
    ),
    honors: student["HNA"]?.filter((honor) => honor["Student id"] === id),
    activities: student["Activities"]?.filter(
      (activity) => activity["Student id"] === id
    ),
    universities: student["Universities"]?.filter(
      (university) => university["Student id"] === id
    ),
  };
}
function StudentPortal() {
  const [student, setStudent] = useState({});

  const location = useLocation();
  // console.log(location);
  // Fetch student data when component mounts
  useEffect(() => {
    const fetchedStudent = getStudentById("STU001");
    setStudent(fetchedStudent);
  }, [setStudent]);

  return (
    <div className={styles.container}>
      <Sidebar />
      {location.pathname === "/sportal/dashboard" ? (
        <Dashboard student={student} />
      ) : (
        <Edit student={student} />
      )}
      <Outlet />
    </div>
  );
}

export default StudentPortal;
