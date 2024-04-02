import "../../styles/global.css";
import { Locale } from "../../i18n/i18n-config";
import { ReactNode } from "react";
import { getDictionary } from "../../i18n/get-dirctionary";
import { Providers } from "../providers/providers";
export const metadata = {
  title: "App",
  description: "App description",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <head>
      </head>
      <body>
        <Providers dictionary={dictionary}>{children}</Providers>
      </body>
    </html>
  );
}
