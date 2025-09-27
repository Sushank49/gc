import styles from "./Dashboard.module.css";
import StudentDetails from "./StudentDetails";

function Dashboard({ student }) {
  if (!student || !student.studentDetails) {
    return <p>Loading student data...</p>;
  }
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

  console.log(student?.studentDetails[0].Name);
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Student Dashboard</h1>
      <h2 className={styles.subTitle}>
        {msg}, {student?.studentDetails[0]?.Name}
      </h2>
      <hr className={styles.divider} />
      {sections.map((s, idx) => (
        <StudentDetails type={s.type} data={s.data} key={idx} />
      ))}
    </div>
  );
}

export default Dashboard;
