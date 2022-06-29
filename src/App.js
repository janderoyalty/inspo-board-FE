import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./components/Board";

export const URL = "https://ma5en-inspo-board-be.herokuapp.com";

function App() {
  // BRAINS
  const [board, setBoard] = useState({});

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
      {/* <Board board={board} addedBoard={addBoard} /> */}
      <button
        onClick={() => {
          addBoard({ title: "Work", owner: "Jande" });
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
          deleteBoard(7);
        }}
      >
        Delete Board
      </button>
    </div>
  );
}

export default App;
