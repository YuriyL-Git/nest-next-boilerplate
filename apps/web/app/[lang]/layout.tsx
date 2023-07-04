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
  console.log("Lang =>>", params.lang);

  return (
    <html lang={params.lang}>
      <head>
        <script
          type="module"
          async
          src="https://storage.googleapis.com/gidget-static/dev.v.2.0.0.3/gidget/gidget.esm.js"
        ></script>
        <script
          noModule
          async
          src="https://storage.googleapis.com/gidget-static/dev.v.2.0.0.3/gidget/gidget.js"
        ></script>
      </head>
      <body>
        <Providers dictionary={dictionary}>{children}</Providers>
      </body>
    </html>
  );
}
