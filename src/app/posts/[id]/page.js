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
    <div>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
