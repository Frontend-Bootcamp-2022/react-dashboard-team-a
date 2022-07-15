import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = ({isOpen}) => {
  return (
    <div className={`header ${isOpen ? "headerOpen" : ""}`}>
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default Header;
