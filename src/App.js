import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateBoardForm from './Components/UpdateBoardForm';
// import Board from './Board';

export const URL = 'https://ma5en-inspo-board-be.herokuapp.com';

function App() {
    const [boardData, setBoardData] = useState([]);
    const [selected, setSelected] = useState({});

    const getBoards = () => {
        axios
            .get(`${URL}/boards`)
            .then((response) => {
                const newData = response.data.map((board) => {
                    return {
                        id: board.board_id,
                        title: board.title,
                        owner: board.owner,
                    };
                });
                setBoardData(newData);
                // setSelected(boardData[0]);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => getBoards(), []);

    const updateBoard = (newBoardInfo) => {
        axios
            .put(`${URL}/boards/${selected.id}`, newBoardInfo)
            .catch((err) => alert(err));
        const newBoardData = boardData.map((board) => {
            if (board.id === selected.id) {
                return newBoardInfo;
            } else {
                return board;
            }
        });
        setBoardData(newBoardData);
    };

    return (
        <div className='App'>
            <UpdateBoardForm updateBoardCallback={updateBoard} />
            {/* <Board boardId={selected.id} /> */}
        </div>
    );
}

export default App;
