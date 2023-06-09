import { gqlServer } from "../../../common/graphql/graphql-server";
import { getDictionary } from "../../../../i18n/get-dirctionary";
import { Locale } from "../../../../i18n/i18n-config";
import { User } from "@libs/web/data-access-graphql";
import { TestComponent } from "../../../components/test-component/test-comp";
import { NavBar } from "../../../components/nav-bar/nav-bar";

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
    <div>
      <NavBar />
      <h1>{HomePageStrings.Title}</h1>
      <h1>Update readme update branch Id slug</h1>
      <TestComponent />

      {usersArray.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
