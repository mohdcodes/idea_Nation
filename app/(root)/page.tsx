import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';

type StartupCardType = {
  title: string;
  description: string;
  views: number;
  comments: number;
  _id: number;
  category: string;
  _createdAt: string;
  image: string;
  author: { _id: number };
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const post = [
    {
      title: 'Startup Idea',
      description: 'This is a description of the startup idea',
      views: 10,
      comments: 5,
      _id: 1,
      category: 'Bitch',
      _createdAt: '2022-01-01',
      image:
        'https://images.pexels.com/photos/31033909/pexels-photo-31033909/free-photo-of-bicycle-leaning-against-brick-wall-in-amsterdam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: { _id: 1, name: 'MOHD ARBAAZ SIDDIQUI' },
    },
    {
      title: 'Startup Idea',
      description: 'This is a description of the startup idea',
      views: 10,
      comments: 5,
      _id: 2,
      category: 'Bitch',
      _createdAt: '2022-01-01',
      image:
        'https://images.pexels.com/photos/30988651/pexels-photo-30988651/free-photo-of-snow-monkeys-relaxing-in-hot-springs-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: { _id: 2, name: 'MOHD ARBAAZ SIDDIQUI' },
    },
  ];
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          pitch your startup idea, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competetion
        </p>
        <SearchForm query={query} />
      </section>

      <section className="text-30-semibold">
        <p>{query ? `Search results for "${query}"` : 'Latest Pitches'}</p>
        <ul className="mt-5 card-grid flex gap-20">
          {post.length > 0 ? (
            post.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
