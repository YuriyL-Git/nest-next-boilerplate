import styles from "./page.module.css";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      <div>Main Layout</div>

      {children}
    </div>
  );
}
