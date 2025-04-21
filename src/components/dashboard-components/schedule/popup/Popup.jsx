/**
 * This Component will return:
 * 1 The card will render the post:
 * 1.1 The post image [, ]
 * 1.2 The post title [, ]
 * 1.3 The post description [, ]
 * 1.4 The post date [, ]
 * 1.5 Two btns one for editing the post and the other for deleting the post [, ]
 */

import { useAppState } from '../../../../context/AppContext';
import PostImage from './PostImage';
import PostTitle from './PostTitle';
import PostDescription from './PostDescription';
import PostTime from './PostTime';

const commonStyles =
  'text-small rounded-md cursor-pointer py-2 w-32 border duration-200';

const Popup = () => {
  const {
    isDarkMode,
    handleClosePopup,
    postTitle,
    postDescription,
    postTime,
    setPosts,
  } = useAppState();

  const handleCreatePost = () => {
    const postData = {
      postTitle,
      postDescription,
      postTime,
    };
    setPosts((prevPosts) => [...prevPosts, postData]);

    handleClosePopup();
  };

  return (
    <div
      className={`w-[92vw] md:w-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isDarkMode ? 'bg-darkBluishGray' : 'bg-white'
      } p-5 rounded-xl z-50`}
    >
      {/* Render Popup Fields */}
      <div className="flex flex-col gap-3 mb-7">
        <PostImage />
        <PostTitle />
        <PostDescription />
        <PostTime />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-2 justify-end">
        <button
          className={`${commonStyles} border-blueberry hover:bg-blueberry ${
            isDarkMode ? 'text-white' : 'text-navy hover:text-white'
          }`}
          onClick={handleClosePopup}
        >
          Cancel
        </button>
        <button
          className={`${commonStyles} border-blueberry/80 bg-blueberry/80 hover:border-blueberry hover:bg-blueberry text-white`}
          onClick={handleCreatePost}
        >
          Create
        </button>
      </div>
      <button
        className={`absolute top-2.5 right-2.5 text-sm cursor-pointer ${
          isDarkMode
            ? 'bg-navy border-light/50 text-white'
            : 'bg-light border-darkBluish-gray/50 text-navy'
        } border p-1 rounded-md font-medium`}
        onClick={handleClosePopup}
      >
        Esc
      </button>
    </div>
  );
};

export default Popup;
