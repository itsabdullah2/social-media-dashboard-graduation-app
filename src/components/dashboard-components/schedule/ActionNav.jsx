import { useAppState } from '../../../context/AppContext';
import { deleteAllScheduled } from '../../../supabase/SupabaseScheduleService';

const commonStyles =
  'w-32 rounded-md border duration-200 py-1 lg:py-2 text-small font-medium cursor-pointer';

const ActionNav = () => {
  const { isDarkMode, handleOpenPopup, setPosts } = useAppState();

  const handleDeleteAll = async () => {
    try {
      await deleteAllScheduled();
      setPosts([]); // Update the local state to reflect the deletion
    } catch (error) {
      console.error('Failed to delete all posts:', error);
    }
  };

  return (
    <div
      className={`flex items-center gap-3 lg:gap-0 justify-between border-b ${
        isDarkMode ? 'border-navy' : 'border-light'
      } pb-3`}
    >
      <button
        className={`${commonStyles} border-blueberry text-blueberry hover:bg-light`}
        onClick={handleDeleteAll}
      >
        Clear posts
      </button>
      <button
        onClick={handleOpenPopup}
        className={`${commonStyles} ${
          isDarkMode ? 'bg-gray-800' : 'bg-light'
        } border-blueberry/80 text-blueberry`}
      >
        Create post
      </button>
    </div>
  );
};

export default ActionNav;
