import styles from "./page.module.css";
import { SignUp } from "../../components/sign-up-form/sign-up-form";

export default async function Page() {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
}
