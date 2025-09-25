import styles from "./ListBtn.module.css";
import { useNavigate } from "react-router-dom";

function ListBtn({ title }) {
  const navigate = useNavigate();
  const handleClick = () => {
    const path = title.toLowerCase();
    navigate(`/sportal/${path}`);
  };
  return (
    <div className={styles.btn} onClick={handleClick}>
      {title}
    </div>
  );
}

export default ListBtn;
