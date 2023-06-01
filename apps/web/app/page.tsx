import styles from "./page.module.css";
import { TestPage } from "./pages/test-page";
import { gql } from "./data-access/graphql-client";
import Image from "next/image";
import { webEnv } from "../environments/environments";

const { storage } = webEnv;
export default async function Index() {
  const { HomeBlocks } = await gql.GetHomeImages();

  console.log("storage", storage);
  return (
    <div className={styles.page}>
      <TestPage />
      {HomeBlocks.map((block) => (
        <Image
          src={`${storage.url}/${block.imagePath}`}
          alt="test"
          key={block.imagePath}
          width="500"
          height="500"
        />
      ))}
    </div>
  );
}
