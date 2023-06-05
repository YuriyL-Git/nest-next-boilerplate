import styles from "./page.module.css";
import { gql } from "../../data-access/graphql-client";
import { getDictionary } from "../../i18n/get-dirctionary";
import { Locale } from "../../i18n/i18n-config";

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  const { users } = await gql.GetUsers();
  const { HomePageStrings } = await getDictionary(params.lang);

  return (
    <div className={styles.container}>
      <h1>{HomePageStrings.Title}</h1>
      <h1>test new</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
