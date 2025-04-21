const Post = ({ post }) => {
  return (
    <div className="flex flex-col justify-center gap-2 bg-indigo-500 rounded-lg shadow p-2">
      <div className="flex gap-2">
        <img
          alt="post-image"
          className="bg-light w-24 h-24 shrink-0 rounded-lg"
        />
        <div className="flex flex-col text-white">
          <span className="font-bold italic">{post.postTitle}</span>
          <p className="line-clamp-3">{post.postDescription}</p>
        </div>
      </div>
      <button className="hover:bg-purple-300 bg-neutral-50 font-bold text-indigo-500 rounded p-2">
        See more
      </button>
    </div>
  );
};

export default Post;
