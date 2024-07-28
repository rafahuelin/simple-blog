// src/app/posts/[id]/page.js
import { getAllPostIds, getPostData } from "../../../lib/posts";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <div className="bg-black text-white">
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
