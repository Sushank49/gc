import { useState } from "react";
import styles from "./EditBox.module.css";
import PrimaryBtn from "./PrimaryBtn";

function EditBox({ section }) {
  const [active, setActive] = useState(true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [hours, setHours] = useState("");
  const [degree, setDegree] = useState("");
  const [recognition, setRecognition] = useState("");
  const [activity, setActivity] = useState("");
  const [award, setAward] = useState("");
  const [time, setTime] = useState("");

  const resetStates = () => {
    setTitle("");
    setDate("");
    setDescription("");
    setCountry("");
    setHours("");
    setDegree("");
    setRecognition("");
    setActivity("");
    setAward("");
    setTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      title,
      date,
      description,
      country,
      hours,
      degree,
      recognition,
      activity,
      award,
      time,
    });
    // Reset form fields after submission
    resetStates();
  };
  const handleClose = () => {
    // Logic to close the edit box, e.g., setting a state in the parent component
    setActive(false);
    // resetStates();
  };
  const handleChange3 = (e) => {
    setTime(e.target.value);
  };
  const handleChange2 = (e) => {
    setAward(e.target.value);
  };
  const handleChange1 = (e, state1, state2, state3) => {
    setActivity(e.target.value);
  };

  let sectActivity = section === 0;
  let sectHonors = section === 1;

  switch (section) {
    case 0:
      console.log("Activity Section");
      break;
    case 1:
      console.log("Honors Section");
      break;
    case 2:
      console.log("University Section");
      break;
    default:
      console.log("No Section Selected");
  }

  // 0 = activities, 1 = honors, 2 = universities, 3 = feedback
  if (section === null) {
    return null; // Don't render anything if no section is selected
  }

  return (
    <div className={`${active ? styles.overlay : ""}`}>
      <div className={styles.card}>
        <form className={styles.form}>
          <h2 className={styles.heading}>
            Add{" "}
            {sectActivity ? "Activity" : sectHonors ? "Honors" : "University"}
          </h2>
          <input
            type="text"
            placeholder="Title"
            className={`${styles.title} ${styles.input}`}
            maxLength={50}
          ></input>
          <input
            type="date"
            className={`${styles.date} ${styles.input}`}
          ></input>
          <input
            type="text"
            placeholder={`${
              sectActivity || sectHonors ? " 📝 Description" : "📝 Degree "
            }`}
            className={`${styles.description}  ${styles.input}`}
            maxLength={100}
          ></input>
          <input
            type="text"
            placeholder={`${
              sectActivity
                ? "🏆 Activity"
                : sectHonors
                ? "🏆 Recognition"
                : "🏆 Country"
            }`}
            className={`${styles.description}  ${styles.input}`}
            maxLength={50}
          ></input>
          <input
            className={`${styles.description}  ${styles.input}`}
            type="text"
            placeholder={`${
              sectActivity
                ? "⌚ Hours Spent"
                : sectHonors
                ? "🎓 Award awarded by "
                : "⌚ Time of Intake"
            }`}
            maxLength={50}
          ></input>
          <div className={styles.btnContainer}>
            <PrimaryBtn btnName={"Submit"} onClick={handleSubmit}></PrimaryBtn>
            <PrimaryBtn btnName={"Close"} onClick={handleClose}></PrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBox;
