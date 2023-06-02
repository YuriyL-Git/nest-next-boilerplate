import styles from "./page.module.css";
import { gql } from "../../data-access/graphql-client";

export default async function Index() {
  const { users } = await gql.GetUsers();

  return (
    <div className={styles.page}>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
