import React, { useState } from "react";

import styles from "./Edit.module.css";
import StudentDetails from "./StudentDetails";
import PrimaryBtn from "./PrimaryBtn";
import EditBox from "./EditBox";

function Edit({ student }) {
  // 0 = activities, 1 = honors, 2 = universities, 3 = feedback
  const [addSection, setAddSection] = useState(null);

  // Handle case where student or studentDetails might be undefined
  if (!student || !student.studentDetails) {
    return <p>Loading student data...</p>;
  }

  function handleClick(idx) {
    setAddSection(idx);
  }

  const sections = [
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
        {msg}, {student?.studentDetails[0]?.Name}
      </h2>
      <hr className={styles.divider} />
      <span className={styles.editText}>*Editing mode</span>
      {sections.map((s, idx) => (
        <React.Fragment key={idx}>
          <StudentDetails type={s.type} data={s.data} />
          <PrimaryBtn btnName={"Add"} onClick={() => handleClick(idx)} />
        </React.Fragment>
      ))}
      <EditBox section={addSection} />
    </div>
  );
}

export default Edit;
