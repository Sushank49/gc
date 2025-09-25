import styles from "./login.module.css";
import LoginBox from "../components/LoginBox";

function login() {
  return (
    <section className={styles.login}>
      <LoginBox />
    </section>
  );
}

export default login;
