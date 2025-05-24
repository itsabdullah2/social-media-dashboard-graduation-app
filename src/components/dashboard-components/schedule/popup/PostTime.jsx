import { useEffect } from 'react';
import { useAppState } from '../../../../context/AppContext';

const PostTime = () => {
  const { isDarkMode, postDateTime, setPostDateTime, isEditingMode } =
    useAppState();

  useEffect(() => {
    if (isEditingMode && postDateTime) {
      const date = new Date(postDateTime);
      const formattedDate = date.toISOString().slice(0, 16);
      setPostDateTime(formattedDate);
    }
  }, [isEditingMode]);

  const handleDateTimeChange = (e) => {
    setPostDateTime(e.target.value);
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
        type="datetime-local"
        id="post-time"
        value={postDateTime ?? ''}
        onChange={handleDateTimeChange}
        className={`${
          isDarkMode ? 'bg-navy text-white' : 'bg-light text-navy'
        } py-2 px-3 rounded-md focus:outline-none focus:placeholder:opacity-0 placeholder:duration-200 border border-blueberry/40 focus:border-blueberry`}
        required
      />
    </div>
  );
};

export default PostTime;
