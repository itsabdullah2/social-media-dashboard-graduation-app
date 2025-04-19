import React, { useState } from 'react';

const ImageUpload = () => {
  const [fileName, setFileName] = useState('Choose image');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
  };
  return (
    <div className="flex items-center gap-2">
      <div className="text-sm w-fit p-2 rounded-full bg-blueberry text-white">
        AO
      </div>
      <label
        htmlFor="image-upload"
        className="bg-light text-navy py-1 px-3 rounded-md cursor-pointer"
      >
        {fileName}
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUpload;
