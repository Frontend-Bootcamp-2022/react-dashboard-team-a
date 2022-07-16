import { IconAdd, IconFilter, IconSearch } from "../../assets/icons";

const CardTop = () => {
  return (
    <div className="cardTop">
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
      <div className="search-bar" id="display-hidden">
        <IconSearch />
        <input type="text" placeholder="Search" className="search-input" />
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

export default CardTop;
