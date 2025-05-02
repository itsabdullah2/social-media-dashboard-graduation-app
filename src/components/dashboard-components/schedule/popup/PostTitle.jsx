import { useAppState } from "../../../../context/AppContext";

const PostTitle = () => {
  const { isDarkMode, postTitle, setPostTitle } = useAppState();

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="post-title"
        className={`basis-24 ${
          isDarkMode ? "text-white" : "text-navy"
        } text-small font-medium`}
      >
        Title
      </label>
      <input
        type="text"
        id="post-title"
        value={postTitle ?? ""}
        onChange={handleTitleChange}
        className={`flex-1 ${
          isDarkMode ? "bg-navy text-white" : "bg-light text-navy"
        } py-2 px-3 rounded-md focus:outline-none focus:placeholder:opacity-0 placeholder:duration-200 border border-blueberry/40 focus:border-blueberry`}
        placeholder="Enter title"
      />
    </div>
  );
};

export default PostTitle;
