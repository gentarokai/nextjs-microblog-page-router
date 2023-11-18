import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Gen kai";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  // 他のコンポーネントからLayoutを呼び出した際に<Layout></Layout>の間に入るものをchildrenとして扱う
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.png"
          alt="Your Name"
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
