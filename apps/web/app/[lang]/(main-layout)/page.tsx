import styles from "./page.module.css";
import { gqlServer } from "../../common/graphql/graphql-server";
import { getDictionary } from "../../../i18n/get-dirctionary";
import { Locale } from "../../../i18n/i18n-config";
import { User } from "@libs/web/data-access-graphql";
import { TestComponent } from "../../components/test-component/test-comp";
import { NavBar } from "../../components/nav-bar/nav-bar";
import Link from "next/link";
import { LoginWithIdPage } from "@app/web/router";
import { RevalidateButton } from "../../components/revalidate-button/revalidate-button";

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  let usersArray: User[] = [];

  try {
    const { users } = await gqlServer.GetUsers();

    usersArray = users;
    // @ts-ignore
  } catch (error) {
    console.log("error", error);
  }
  const { HomePageStrings } = await getDictionary(params.lang);

  return (
    <div className={styles.container}>
      <Link
        href={LoginWithIdPage.getRoute({
          id: "fdsfsf",
        })}
      >
        DashBoardLoginPage{" "}
      </Link>
      <NavBar />
      <h1>{HomePageStrings.Title}</h1>
      <h1>Update readme update branch name</h1>
      <TestComponent />

      {usersArray.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <RevalidateButton />
    </div>
  );
}
