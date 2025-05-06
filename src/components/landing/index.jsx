import Header from './Header';
import About from './About';
import TryItNow from './TryItNow';
import { useAppState } from '../../context/AppContext';

const Landing = () => {
  const { isDarkMode } = useAppState();
  
  return (
    <main className={`max-w-[1624px] mx-auto ${isDarkMode ? 'bg-navy' : 'bg-white'}`}>
      <Header />
      <About />
      <TryItNow />
    </main>
  );
};

export default Landing;
