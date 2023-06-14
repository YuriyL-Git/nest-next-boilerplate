import { LoginForm } from "../../../../components/login-form/login-form";
import { Locale } from "../../../../../i18n/i18n-config";
interface Props {
  params: { lang: Locale };
}
export default async function Page({ params }: Props) {
  console.log("PARAMS =", params);
  return (
    <div>
      Login with id and slug
      <LoginForm />
    </div>
  );
}
