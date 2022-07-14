import { IconAdd, IconFilter } from "../../assets/icons";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="btn-secondary-container">
        <button className="btn-active">
          <span>
            <IconAdd />
          </span>
          New
        </button>

        <div className="link-box">
          <a href="#" id="link-active">
            All
          </a>
          <a href="#">Inactive</a>
          <a href="#">Active</a>
          <a href="#">On Hold</a>
          <a href="#">Completed</a>
        </div>
      </div>
      <div className="link-box-right">
        <a href="#">Default</a>
        <button className="button-filter">
          <IconFilter />
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;