import styles from "./Dashboard.module.css";
import StudentDetails from "./StudentDetails";
import studentData from "../assets/StudentData.json";

function getStudentById(id) {
  const student = JSON.parse(JSON.stringify(studentData));

  return {
    studentDetails: student["Student Table"].find(
      (s) => s["Student id"] === id
    ),
    feedback: student["Feedbacks"].filter(
      (feedback) => feedback["Student id"] === id
    ),
    honors: student["HNA"].filter((honor) => honor["Student id"] === id),
    activities: student["Activities"].filter(
      (activity) => activity["Student id"] === id
    ),
    universities: student["Universities"].filter(
      (university) => university["Student id"] === id
    ),
  };
}

function Dashboard() {
  const student = getStudentById("STU001");
  const sections = [
    // {
    //   type: "details",
    //   data: student?.studentDetails,
    // },
    { type: "activities", data: student?.activities },
    { type: "honors", data: student?.honors },
    { type: "universities", data: student?.universities },
    // { type: "feedback", data: student?.feedback },
  ];

  let msg = "";
  let time = new Date().getHours();
  if (time < 12) msg = "Good Morning";
  else if (time < 18) msg = "Good Afternoon";
  else msg = "Good Evening";

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Student Dashboard</h1>
      <h2 className={styles.subTitle}>
        {msg}, {student?.studentDetails?.Name}
      </h2>
      <hr className={styles.divider} />
      {sections.map((s, idx) => (
        <StudentDetails type={s.type} data={s.data} key={idx} />
      ))}
    </div>
  );
}

export default Dashboard;
