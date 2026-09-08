import Navbar from "./Navbar";
import TopUtilityBar from "./TopUtilityBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-[0_8px_12px_rgba(0,0,0,0.18)]">
      <TopUtilityBar />
      <div className="bg-white">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
