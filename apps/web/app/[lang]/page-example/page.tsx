import { getDictionary } from "../../../i18n/get-dirctionary";
import { Locale } from "../../../i18n/i18n-config";

interface Props {
  params: { lang: Locale };
}

/*page url /ru/page-example */
const Page = async ({ params }: Props) => {
  /*the same fetch as on layout will be cached and done only once */
  const dictionary = await getDictionary(params.lang);
  return <div>Page example</div>;
};

export default Page;
