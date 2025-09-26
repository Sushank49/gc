import styles from "./Dashboard.module.css";
import StudentDetails from "./StudentDetails";
import studentData from "../assets/StudentData.json";

function getStudentById(id) {
  const student = JSON.parse(JSON.stringify(studentData));
  console.log(
    student["Student Table"].find((s) => s["Student ID"] === id).House
  );
  return {
    student,
    honors: student["Academic Honors"].find(
      (honor) => honor["Student ID"] === id
    ),
    activities: student["Activities"].find(
      (activity) => activity["Student ID"] === id
    ),
    awards: student["Awards"].find((award) => award["Student ID"] === id),
    universities: student["Universities"].find(
      (university) => university["Student ID"] === id
    ),
  };
}

function Dashboard() {
  // getStudentById("STU001");
  return (
    <div style={{ backgroundColor: "red" }}>
      <StudentDetails student={getStudentById("STU001")} />
    </div>
  );
}

export default Dashboard;
