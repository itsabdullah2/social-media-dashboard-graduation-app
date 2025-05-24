import { useState } from 'react';
import { useAppState } from '../../../../context/AppContext';

const PostImage = () => {
  const [filename, setFilename] = useState('Add Image');
  const { isDarkMode, setPostImage } = useAppState();

  const handleImageChange = (e) => {
    const image = e.target.files[0];

    if (image) {
      const imageName = image.name;
      setFilename(imageName);

      URL.createObjectURL(image);
      setPostImage(image); // Store the actual file object
    }
  };

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
        } py-2 px-6 rounded-md border border-blueberry/40 active:border-blueberry hover:border-blueberry duration-200 cursor-pointer max-w-full text-nowrap overflow-x-auto`}
      >
        {filename}
      </label>
      <input
        type="file"
        id="post-image"
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
        required
      />
    </div>
  );
};

export default PostImage;
