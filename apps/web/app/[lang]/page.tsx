import styles from "./page.module.css";
import { gqlServer } from "../../common/data-access/graphql-server";
import { getDictionary } from "../../i18n/get-dirctionary";
import { Locale } from "../../i18n/i18n-config";
import { User } from "@next-nest-boilerplate/web/data-access-graphql";

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  let usersArray: User[] = [];

  try {
    const user = await gqlServer.GetUser({
      where: { id: "2721f70f-8687-49f8-9834-ed686bdfb3c8" }
    });
    console.log("USER=", user);
    const { users } = await gqlServer.GetUsers();

    usersArray = users;
    // @ts-ignore
  } catch {
    console.log("error");
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
