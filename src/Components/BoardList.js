import React from "react";
import PropTypes from "prop-types";
// need to import board

// NEED TO CREATE CSS FILE

const BoardList = ({ boards, selectBoard, onDeleteCallback }) => {
  const displayBoard = (boards) => {
    return boards.map((board, index) => {
      return (
        <li key={index} onClick={() => selectBoard(board.id)}>
          {board.title}
        </li>
      );
    });
  };

  return (
    <section>
      <ul>{displayBoard(boards)}</ul>
      <button onClick={() => onDeleteCallback(boards.id)}>🗑</button>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
