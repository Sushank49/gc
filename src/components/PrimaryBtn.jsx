import styles from "./PrimaryBtn.module.css";
import PropTypes from "prop-types";

function PrimaryBtn({ btnName, onClick }) {
  return (
    <div>
      <button className={styles.primaryBtn} onClick={onClick}>
        {btnName}
      </button>
    </div>
  );
}

PrimaryBtn.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default PrimaryBtn;
