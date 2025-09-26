import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (for demonstration purposes)
    if (username === "user" && password === "pass") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/sportal");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <form method="post" className={styles.LoginForm}>
        <div className={styles.inputGroup}>
          <span className={styles.formTitle}>Login</span>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={handleUsernameChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handlePasswordChange}
            value={password}
            className={styles.input}
          />
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
