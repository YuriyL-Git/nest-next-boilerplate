import styles from "./styles.module.css";
import { LoginForm } from "../../components/login-form/login-form";

export default async function Page() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
