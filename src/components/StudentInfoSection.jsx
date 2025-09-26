import styles from "./StudentInfoSection.module.css";
import PropTypes from "prop-types";

function StudentInfoSection({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {data?.Title || data?.Activity || data?.Name || "Info"}
        </h3>
        <span className={styles.date}>📆 {data?.Date || data?.Year}</span>
      </div>
      <h4 className={styles.subTitle}></h4>
      <p className={styles.description}>
        📝 {data?.Description || data?.Degree}
      </p>
      <p className={styles.description}>
        🏆 {data?.Recognition || data?.Country}
      </p>
      <p className={styles.description}>
        {" "}
        {data["Application session"]
          ? "⌚ " + data["Application session"]
          : data["Awarded by"]
          ? "🎓 " + data["Awarded by"]
          : data["Hours spent"]
          ? "⌚ " + data["Hours spent"] + " hrs"
          : "  "}
      </p>
    </div>
  );
}

StudentInfoSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StudentInfoSection;
