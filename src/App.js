import './App.css';
import React, { useState, useEffect } from 'react';
import UpdateBoardForm from './Components/UpdateBoardForm';
import axios from 'axios';

const URL = 'https://ma5en-inspo-board-be.herokuapp.com/';

function App() {
    const [boardData, setBoardData] = useState([]);
    const [selected, setSelected] = useState(boardData[0]);

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
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => getBoards(), []);

    const updateBoard = (newBoardInfo) => {
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
        </div>
    );
}

export default App;
