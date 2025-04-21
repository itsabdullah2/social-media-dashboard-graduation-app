import { useEffect } from 'react';
import { useAppState } from '../../../context/AppContext';
import Post from './Post';

const PostsList = () => {
  const { posts } = useAppState();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
