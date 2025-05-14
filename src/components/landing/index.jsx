import Header from "./Header";
import Features from "./Features";
import TryItNow from "./TryItNow";
import Footer from "./Footer";
import { useAppState } from "../../context/AppContext";

const Landing = () => {
  const { isDarkMode } = useAppState();

  return (
    <main className={`${isDarkMode ? "bg-navy" : "bg-white"}`}>
      <Header />
      <Features />
      <TryItNow />
      <Footer />
    </main>
  );
};

export default Landing;
