import styles from "./styles.module.css";
import { LoginForm } from "../../components/login-form/login-form";
import { RevalidateButton } from "../../components/revalidate-button/revalidate-button";

export default async function Page() {
  return (
    <div className={styles.container}>
      <LoginForm />
      <RevalidateButton />
    </div>
  );
}
