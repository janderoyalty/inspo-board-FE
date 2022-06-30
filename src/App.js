import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateBoardForm from "./Components/UpdateBoardForm";
import NewBoardForm from "./Components/NewBoardForm";
import Board from "./Components/Board";
import BoardList from "./Components/BoardList";

export const URL = "https://ma5en-inspo-board-be.herokuapp.com";

const App = () => {
  // BRAINS
  const [boardData, setBoardData] = useState([]);
  const [selected, setSelected] = useState({ id: 6 });

  const selectBoard = (boardId) => {
    for (const board of boardData) {
      if (board.id === boardId) {
        setSelected(board);
      }
    }
  };

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

  const addBoard = ({ title, owner }) => {
    console.log(title, owner);
    axios
      .post(`${URL}/boards`, {
        title: title,
        owner: owner,
      })
      .then((response) => {
        console.log(response);
        // setBoard(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBoard = (boardId) => {
    console.log(boardId);
    axios
      .get(`${URL}/boards/${boardId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBoard = (boardId) => {
    console.log(boardId);
    axios
      .delete(`${URL}/boards/${boardId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // BEAUTY
  return (
    <div className="App">
      <BoardList selectBoard={selectBoard} boards={boardData} />
      <UpdateBoardForm updateBoardCallback={updateBoard} />
      <NewBoardForm onAddBoardCallback={addBoard} />
      <Board boardId={selected.id} />
      <button
        onClick={() => {
          addBoard({ title: "Hello", owner: "Ivana" });
        }}
      >
        Add Board
      </button>
      <button
        onClick={() => {
          getBoard(2);
        }}
      >
        Get Board
      </button>
      <button
        onClick={() => {
          deleteBoard(8);
        }}
      >
        Delete Board
      </button>
    </div>
  );
};

export default App;
