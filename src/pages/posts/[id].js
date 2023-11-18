import Layout from "@/components/Layout";
import { getAllPostIds } from "../../../lib/post";

// getStaticPathsで定義したパスの一覧がcontextに入っている
export async function getStaticPaths({}) {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// getStaticPropsでパスに応じたデータを取得する(paramsにはパスの情報が入っている)
export async function getStaticProps({ params }) {
  // パスに応じたデータを取得する
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <section></section>
    </Layout>
  );
}
