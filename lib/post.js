import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //ファイル名から.mdを取り除く

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents); //マークダウンファイルのメタデータを解析する

    // id とデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

// getStaticPathsのreturnで返すパスを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    // ファイル名から.mdを取り除く
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// idに応じたデータを取得する
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents); //マークダウンファイルのメタデータを解析する

  // マークダウン形式のデータをHTML形式に変換する
  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHtml = blogContent.toString();
  return {
    id,
    blogContentHtml,
    ...matterResult.data,
  };
}
