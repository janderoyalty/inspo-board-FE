import React, { useState } from "react";

const NewBoardForm = ({ onAddBoardCallback }) => {
  const [boardData, setBoardData] = useState({
    title: "",
    owner: "",
  });
  const [hide, setHide] = useState(true);

  const submitBoardData = (event) => {
    event.preventDefault();

    onAddBoardCallback({
      ...boardData,
      isComplete: boardData.isComplete === "true",
    });
    setBoardData({ title: "", owner: "" });
  };

  const handleBoardChange = (event) => {
    setBoardData({ ...boardData, [event.target.name]: event.target.value });
  };

  const shown = hide ? "hidden" : "shown";

  return (
    <div>
      <button onClick={() => setHide(!hide)}>
        {hide ? "Show Add Board Form" : "Hide Add Board Form"}
      </button>
      <div className={shown}>
        <form onSubmit={submitBoardData} className="new-board__form">
          <section>
            <h2>Add New Board</h2>
            <div className="new-board__fields">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  id="title"
                  value={boardData.title}
                  onChange={handleBoardChange}
                />
              </div>
              <div>
                <label htmlFor="owner">Owner</label>
                <input
                  name="owner"
                  id="owner"
                  value={boardData.owner}
                  onChange={handleBoardChange}
                />
              </div>
              <button className="button new-board__submit" type="submit">
                Add Board
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default NewBoardForm;
