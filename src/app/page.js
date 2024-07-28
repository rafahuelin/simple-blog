import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

// Ensure the component is a valid React component
export default async function Page() {
  // Fetch data
  const allPostsData = await getSortedPostsData();

  return (
    <div>
      <p className='text-3xl'>My Blog</p>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small className='text-3xl'>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}