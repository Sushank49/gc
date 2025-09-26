import styles from "./ListBtn.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ListBtn({ title, isActive, onClick }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) onClick();
    const path = title.toLowerCase();
    navigate(`/sportal/${path}`);
  };
  return (
    <div
      className={styles.btn + (isActive ? ` ${styles.active}` : "")}
      onClick={handleClick}
    >
      {title}
    </div>
  );
}

ListBtn.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
export default ListBtn;
