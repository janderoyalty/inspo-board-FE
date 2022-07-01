import { BiCheck } from "react-icons/bi";
import "./SortMenu.css";
import PropTypes from "prop-types";

const SortBoardMenu = ({
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  return (
    <section id="sort-menu">
      <h4 className="sort-menuLabel">sort by</h4>
      <button onClick={() => onSortByChange("title")} className="menuItem">
        title {sortBy === "title" && <BiCheck id="checkMark" />}
      </button>
      <button onClick={() => onSortByChange("owner")} className="menuItem">
        owner {sortBy === "owner" && <BiCheck id="checkMark" />}
      </button>
      <button onClick={() => onSortByChange("id")} className="menuItem">
        date added {sortBy === "id" && <BiCheck id="checkMark" />}
      </button>
      <h4 className="sort-menuLabel">order</h4>
      <button onClick={() => onOrderByChange("asc")} className="menuItem">
        ascending {orderBy === "asc" && <BiCheck id="checkMark" />}
      </button>
      <button onClick={() => onOrderByChange("desc")} className="menuItem">
        descending {orderBy === "desc" && <BiCheck id="checkMark" />}
      </button>
    </section>
  );
};

SortBoardMenu.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  onOrderByChange: PropTypes.func.isRequired,
};

export default SortBoardMenu;
