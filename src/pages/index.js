import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "../../lib/post";

// SSGの場合 getStaticPropsを追加する(外部から一度だけデータを取得する)
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);
  // データをprops経由でページに渡す
  return {
    props: {
      allPostsData,
    },
  };
}
// SSRの場合 getServerSidePropsを追加する(リクエストごとにデータを取得する)
// export async function getServerSideProps(context) {
//   return {
//     props: {}, // 更新が頻繁なページではSSGよりSSRの方が良い
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私はフロントエンドエンジニアです。ReactとNext.jsを使っています。</p>
      </section>

      <section>
        <h2 className={utilStyles.headingMd}>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
