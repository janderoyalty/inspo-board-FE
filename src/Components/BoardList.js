import React, { useState } from "react";
import PropTypes from "prop-types";
import SortBoardMenu from "./SortBoardMenu";
import { BiSort } from "react-icons/bi";
import NewBoardForm from "./NewBoardForm";

const BoardList = ({ boards, selectBoard, onAddBoardCallback }) => {
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");
  const [hide, setHide] = useState(true);

  const shown = hide ? "hidden" : "shown";
  const sortedBoards = boards.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
  });

  const displayBoard = (boards) => {
    return sortedBoards.map((board, index) => {
      return (
        <li key={index} onClick={() => selectBoard(board.id)}>
          {board.title}
        </li>
      );
    });
  };

  return (
    <section>
      <div>
        <div>
          <NewBoardForm onAddBoardCallback={onAddBoardCallback} />
          <BiSort className="icons" size={30} onClick={() => setHide(!hide)}>
            {hide ? "Show" : "Hide"}
          </BiSort>
        </div>
        <section className={shown}>
          <div className="sort-menu--container">
            <SortBoardMenu
              sortBy={sortBy}
              onSortByChange={(sortOption) => {
                setSortBy(sortOption);
              }}
              orderBy={orderBy}
              onOrderByChange={(orderOption) => {
                setOrderBy(orderOption);
              }}
            />
          </div>
        </section>
      </div>
      <ul>{displayBoard(boards)}</ul>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  selectBoard: PropTypes.func.isRequired,
  onAddBoardCallback: PropTypes.func.isRequired,
};

export default BoardList;
