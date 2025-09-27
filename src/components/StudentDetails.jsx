import PropTypes from "prop-types";
import styles from "./StudentDetails.module.css";
import StudentInfoSection from "./StudentInfoSection";

function StudentDetails({ type, data }) {
  return (
    <div>
      <h2 className={styles.title}>{type.toUpperCase()}</h2>
      {data.map((d, idx) => (
        <StudentInfoSection key={idx} data={d} />
      ))}
    </div>
  );
}

StudentDetails.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default StudentDetails;
