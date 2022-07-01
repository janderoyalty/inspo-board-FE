import React, { useState } from "react";
import PropTypes from "prop-types";
import SortBoardMenu from "./SortBoardMenu";

const BoardList = ({ boards, selectBoard }) => {
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

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
      <ul>{displayBoard(boards)}</ul>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
