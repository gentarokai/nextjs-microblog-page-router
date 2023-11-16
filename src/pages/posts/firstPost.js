import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>最初の投稿</title>
        <meta name="description" content="Create Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>最初の投稿</h1>
      <a href={"/"} className="text-blue-600">
        ホームへ戻る
      </a>
    </div>
  );
}
