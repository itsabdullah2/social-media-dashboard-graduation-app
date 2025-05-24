import { useAppState } from '../../../context/AppContext';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

const Post = ({ post }) => {
  const { isDarkMode, handleOpenPopup, handleDeletePost, handleEditPost } =
    useAppState();

  const dateString = post?.scheduled_at;
  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const scheduledTime = new Date(dateString).toLocaleString('en-us', options);

  return (
    <div
      className={`flex flex-col justify-center gap-5 shadow-lg ${
        isDarkMode ? 'bg-navy' : 'bg-light'
      } rounded-lg shadow p-3`}
    >
      <div className="">
        <img
          src={post?.image_file}
          alt="post image"
          className="w-full rounded-md bg-cover bg-center"
        />
      </div>
      <div
        className={`flex flex-col ${isDarkMode ? 'text-white' : 'text-navy'}`}
      >
        <span className={`font-bold italic`}>{post?.title}</span>
        <p className={``}>{post?.description}</p>
        <span>{scheduledTime}</span>
      </div>
      <div className="flex items-center justify-between">
        <Link
          to={`/dashboard/schedule/${post?.post_id}`}
          className={`text-center font-bold text-blueberry bg-light ${
            isDarkMode ? 'hover:text-white hover:bg-blueberry' : ''
          } duration-200 rounded-md p-2 cursor-pointer`}
        >
          See more
        </Link>
        <div className="flex items-center gap-5">
          <button
            className={`cursor-pointer text-gray-400`}
            onClick={() => {
              handleOpenPopup();
              handleEditPost(post);
            }}
          >
            <MdEdit size={25} />
          </button>
          <button
            className={`cursor-pointer text-gray-400`}
            onClick={() => handleDeletePost(post?.post_id)}
          >
            <MdDelete size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
