import styles from "./page.module.css";
import { gqlServer } from "../../common/data-access/graphql-server";
import { getDictionary } from "../../i18n/get-dirctionary";
import { Locale } from "../../i18n/i18n-config";
import { GetUsers } from "@next-nest-boilerplate/web/data-access-graphql";

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  let usersArray: GetUsers["users"] = [];
  try {
    const { users } = await gqlServer.GetUsers();
    usersArray = users;
  } catch (error) {
    console.log(error);
  }
  const { HomePageStrings } = await getDictionary(params.lang);

  return (
    <div className={styles.container}>
      <h1>{HomePageStrings.Title}</h1>
      <h1>Update readme update branch name</h1>
      {usersArray.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
