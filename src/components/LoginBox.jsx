import styles from "./LoginBox.module.css";
import LoginForm from "./LoginForm";

function LoginBox() {
  return (
    <div className={styles.loginBox}>
      <LoginForm />
    </div>
  );
}

export default LoginBox;
