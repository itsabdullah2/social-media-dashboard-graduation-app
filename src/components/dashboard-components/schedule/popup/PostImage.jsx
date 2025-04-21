import { useAppState } from '../../../../context/AppContext';

const PostImage = () => {
  const { isDarkMode } = useAppState();

  return (
    <div className="flex items-center gap-3">
      <span
        className={`basis-24 text-small font-medium ${
          isDarkMode ? 'text-white' : 'text-navy'
        }`}
      >
        Image
      </span>
      <label
        htmlFor="post-image"
        className={`bg-light ${
          isDarkMode ? 'bg-navy text-white' : 'bg-light text-navy'
        } py-2 px-6 rounded-md border border-blueberry/40 active:border-blueberry hover:border-blueberry duration-200 cursor-pointer`}
      >
        Add image
      </label>
      <input type="file" id="post-image" accept="image/*" className="hidden" />
    </div>
  );
};

export default PostImage;
