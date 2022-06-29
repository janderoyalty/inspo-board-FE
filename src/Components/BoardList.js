import React from 'react';
import PropTypes from 'prop-types';
// need to import board 

// NEED TO CREATE CSS FILE 


const BordList = ({ boards, selectBoard }) => {
    const displayBoard = boards.map((board => {
        return <ul>{board.title}</ul>
    });

    return (
        <section>
            <li>{{displayBoard}}</li>
        </section>
    )
}


BoardList.propTypes = { 
    boards: PropTypes.array.isRequired,
}

export default BoardList;
