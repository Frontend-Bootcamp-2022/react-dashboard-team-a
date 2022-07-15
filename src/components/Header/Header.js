import HeaderTop from "./HeaderTop";

const Header = ({isOpen}) => {
  return (
    <div className={`header ${isOpen ? "headerOpen" : ""}`}>
      <HeaderTop />
    </div>
  );
};

export default Header;
