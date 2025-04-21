/**
 * This Component will return:
 * 1. The planed posts will be rendered as cards [, ]
 * 2. Popup to add a post [, ]
 * 3. Navbar that contains two btns one for adding a post and the other for deleting all posts [done, ]
 */

import ActionNav from './ActionNav';
import PostsList from './PostsList';
import { useAppState } from '../../../context/AppContext';
import Popup from './popup/Popup';

const Schedule = () => {
  const { isDarkMode, isPopupOpen } = useAppState();

  return (
    <section
      className={`w-full flex flex-col gap-5 min-h-full ${
        isDarkMode ? 'bg-darkBluishGray' : 'bg-white'
      } py-5 px-3 rounded-xl`}
    >
      <ActionNav />
      <PostsList />
      {isPopupOpen && <Popup />}
    </section>
  );
};

export default Schedule;
