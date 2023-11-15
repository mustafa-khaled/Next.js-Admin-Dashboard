import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

function LoginPage() {
  return (
    <div className={styles.container}>
      {/* <form className={styles.form}>
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="Password" />
      </form> */}
      <LoginForm />
    </div>
  );
}

export default LoginPage;
