import Header from "./Header";
import About from "./About";
import TryItNow from "./TryItNow";
import Footer from "./Footer";
import { useAppState } from "../../context/AppContext";

const Landing = () => {
  const { isDarkMode } = useAppState();

  return (
    <main className={`${isDarkMode ? "bg-navy" : "bg-white"}`}>
      <Header />
      <About />
      <TryItNow />
      <Footer />
    </main>
  );
};

export default Landing;
