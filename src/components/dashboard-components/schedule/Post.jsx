import { useAppState } from '../../../context/AppContext';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

const Post = ({ post }) => {
  const { isDarkMode, postImage } = useAppState();

  return (
    <div
      className={`flex flex-col justify-center gap-5 shadow-lg ${
        isDarkMode ? 'bg-navy' : 'bg-blueberry'
      } rounded-lg shadow p-3`}
    >
      <img
        src={postImage}
        alt="post image"
        className="w-full max-h-32 rounded-md bg-cover bg-center"
      />
      <div className={`flex flex-col text-white`}>
        <span className={`font-bold italic`}>{post.title}</span>
        <p className={``}>{post.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <Link
          to={`/dashboard/schedule/${post.id}`}
          className={`text-center font-bold text-blueberry bg-light ${
            isDarkMode ? 'hover:text-white hover:bg-blueberry' : ''
          } duration-200 rounded-md p-2 cursor-pointer`}
        >
          See more
        </Link>
        <div className="flex items-center gap-2">
          <button
            className={`rounded-md py-2 px-4 cursor-pointer border ${
              isDarkMode
                ? 'border-blueberry text-blueberry'
                : 'border-white text-white'
            }`}
          >
            <MdEdit size={20} />
          </button>
          <button
            className={`rounded-md py-2 px-4 cursor-pointer border border-darkBluishGray text-darkBluishGray`}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
