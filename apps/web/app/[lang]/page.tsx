import styles from "./page.module.css";
import { TestPage } from "./pages/TestPage";
import { gql } from "../../data-access/graphql-client";

export default async function Index() {
  const { users } = await gql.GetUsers();

  return (
    <div className={styles.page}>
      <TestPage />
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
