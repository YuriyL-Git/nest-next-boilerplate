import styles from "./page.module.css";
import { gqlServer } from "../../data-access/graphql-server";
import { getDictionary } from "../../i18n/get-dirctionary";
import { Locale } from "../../i18n/i18n-config";

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  const { users } = await gqlServer.GetUsers();
  const { HomePageStrings } = await getDictionary(params.lang);

  return (
    <div className={styles.container}>
      <h1>{HomePageStrings.Title}</h1>
      <h1>Update readme update branch name</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
