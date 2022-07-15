import {
  IconChat,
  IconNotificaiton,
  IconSearch,
  IconSettings,
} from "../../assets/icons";
import "./Header.css";
import profilePhoto from "../../assets/images/Profile.jpg";

const HeaderSearch = () => {
  return (
    <div className="header-container">
      <h2 className="header-logo">Projects</h2>
      <div className="search-bar">
        <IconSearch />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="header-settings">
        <div className="button-container">
          <button>
            <IconChat />
          </button>
          <button>
            <IconNotificaiton />
          </button>
          <button>
            <IconSettings />
          </button>
        </div>
        <div className="user-box">
          <img src={profilePhoto} alt="profile" />
          <div className="user-info">
            <span className="user-name">Asfak Mahmud</span>
            <span className="user-email">asfakmahmudbd@gmaill.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
