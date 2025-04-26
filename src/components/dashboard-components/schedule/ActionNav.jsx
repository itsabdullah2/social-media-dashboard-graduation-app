import { useAppState } from '../../../context/AppContext';

const commonStyles =
  'w-32 rounded-md border hover:bg-blueberry duration-200 py-1 lg:py-2 text-small font-medium cursor-pointer';

const ActionNav = () => {
  const { isDarkMode, handleOpenPopup } = useAppState();

  return (
    <div
      className={`flex items-center gap-3 lg:gap-0 justify-between border-b ${
        isDarkMode ? 'border-navy' : 'border-light'
      } pb-3`}
    >
      <button
        className={`${commonStyles} border-blueberry text-blueberry hover:text-white`}
      >
        Clear posts
      </button>
      <button
        onClick={handleOpenPopup}
        className={`${commonStyles} border-blueberry/80 hover:border-blueberry bg-blueberry/80 text-white`}
      >
        Create post
      </button>
    </div>
  );
};

export default ActionNav;
