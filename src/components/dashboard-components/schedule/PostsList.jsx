import { useAppState } from '../../../context/AppContext';
import Post from './Post';
import socialMedia from '../../../assets/social-media.png';

const PostsList = () => {
  const { posts } = useAppState();

  return (
    <div className="relative w-full h-full">
      {posts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts?.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      ) : (
        <div
          className={`absolute left-1/2 top-20 -translate-x-1/2 opacity-85 w-96`}
        >
          <img
            src={socialMedia}
            alt="social media illustration image"
            className="w-full max-w-full"
          />
        </div>
      )}
    </div>
  );
};

export default PostsList;
