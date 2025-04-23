import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderLink from "../components/common/HeaderLink";

function Header({ onShowSignIn }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Reset scroll when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsScrolled(false);
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--fifth)] shadow-md py-2"
          : "bg-[var(--primary)] py-3"
      }`}
    >
      <div className="w-[90%] container mx-auto flex justify-between items-center py-5 px-6">
        <a href="#">
          <h1 className="text-[32px] font-extrabold text-[var(--secondary)]">
            Bright <em className="not-italic text-[var(--quartery)] ">Path</em>
          </h1>
        </a>
        <ul className="hidden w-[505px] md:flex justify-around space-x-6 font-semibold">
          <HeaderLink to="/" pageName="Home" />
          <HeaderLink to="/Activities" pageName="Activities" />
          <HeaderLink to="/AboutUs" pageName="About us" />
          <HeaderLink to="/ContactUs" pageName="Contact us" />
        </ul>
        <button
          onClick={onShowSignIn}
          className="font-semibold p-2 text-[var(--teriary)] border-2 border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-200"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Header;
