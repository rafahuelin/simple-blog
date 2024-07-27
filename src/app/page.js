import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

// Ensure the component is a valid React component
export default async function Page() {
  // Fetch data
  const allPostsData = await getSortedPostsData();

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}