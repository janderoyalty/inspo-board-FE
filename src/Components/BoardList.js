import React from 'react';
import PropTypes from 'prop-types';


const BoardList = ({ boards, selectBoard }) => {
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
        </section>
    );
};

BoardList.propTypes = {
    boards: PropTypes.array.isRequired,
};

export default BoardList;
