import path from "path";
import matter from "gray-matter";
import fs from "fs";

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
