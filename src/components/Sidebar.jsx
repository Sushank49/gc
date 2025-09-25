import ListBtn from "./ListBtn";
import styles from "./Sidebar.module.css";

const sections = [{ title: "Dashboard" }, { title: "Edit" }];

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Sidebar</h2>

      <div className={styles.listContainer}>
        {sections.map((section, index) => (
          <ListBtn key={index} title={section.title} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
