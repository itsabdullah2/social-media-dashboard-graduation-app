import { useAppState } from '../../../../context/AppContext';

const PostTime = () => {
  const { isDarkMode, postTime, setPostTime } = useAppState();

  const handleTimeChange = (e) => {
    setPostTime(e.target.value);
  };

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="post-title"
        className={`basis-24 ${
          isDarkMode ? 'text-white' : 'text-navy'
        } text-small font-medium`}
      >
        Time
      </label>
      <input
        type="time"
        id="post-time"
        value={postTime}
        onChange={handleTimeChange}
        className={`${
          isDarkMode ? 'bg-navy text-white' : 'bg-light text-navy'
        } py-2 px-3 rounded-md focus:outline-none focus:placeholder:opacity-0 placeholder:duration-200 border border-blueberry/40 focus:border-blueberry`}
      />
    </div>
  );
};

export default PostTime;
