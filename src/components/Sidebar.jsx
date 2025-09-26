import ListBtn from "./ListBtn";
import styles from "./Sidebar.module.css";
import { useState } from "react";

const sections = [
  { title: "Dashboard" },
  { title: "Edit" },
  { title: "Profile" },
  { title: "Logout" },
];

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(undefined);
  // console.log(activeIndex);

  const handleClick = (index) => {
    setActiveIndex(index);
    // alert(`Clicked on ${sections[index].title}`);
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Sidebar</h2>

      <div className={styles.listContainer}>
        {sections.map((section, index) => (
          <ListBtn
            key={index}
            title={section.title}
            onClick={() => {
              handleClick(index);
            }}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
