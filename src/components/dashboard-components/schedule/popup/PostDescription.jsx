import { useAppState } from '../../../../context/AppContext';

const PostDescription = () => {
  const { isDarkMode, postDescription, setPostDescription } = useAppState();

  const handleDescriptionChange = (e) => {
    setPostDescription(e.target.value);
  };

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="post-description"
        className={`basis-24 ${
          isDarkMode ? 'text-white' : 'text-navy'
        } text-small font-medium`}
      >
        Description
      </label>
      <textarea
        id="post-description"
        value={postDescription}
        onChange={handleDescriptionChange}
        className={`flex-1 ${
          isDarkMode ? 'bg-navy text-white' : 'bg-light text-navy'
        } py-2 px-3 rounded-md focus:outline-none focus:placeholder:opacity-0 placeholder:duration-200 border border-blueberry/40 focus:border-blueberry resize-none h-[9.375rem]`}
        placeholder="Enter description"
      />
    </div>
  );
};

export default PostDescription;
