import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Forms.css";
import { AiOutlineForm } from "react-icons/ai";
import "./UpdateBoardForm.css";

const UpdateBoardForm = ({ updateBoardCallback }) => {
  const blankFormData = { title: "", owner: "" };

  const [formData, setFormData] = useState(blankFormData);
  const [hide, setHide] = useState(true);

  const updateFormData = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const updateBoard = (e) => {
    e.preventDefault();
    updateBoardCallback(formData);
    setFormData(blankFormData);
  };

  const shown = hide ? "hidden" : "shown";

  return (
    <div>
      <AiOutlineForm className="icons" size={30} onClick={() => setHide(!hide)}>
        {hide ? "Show" : "Hide"}
      </AiOutlineForm>
      <div className={shown}>
        <div className="update-board">
          <h3>Update Board</h3>
          <form className="update-board-form" onSubmit={updateBoard}>
            {/* <div> */}
            <label htmlFor="title">Title</label>
            <input
              onChange={updateFormData}
              name="title"
              id="title"
              type="text"
              value={formData.title}
            />
            {/* </div> */}
            {/* <div> */}
            <label htmlFor="owner">Owner</label>
            <input
              onChange={updateFormData}
              name="owner"
              id="owner"
              type="owner"
              value={formData.owner}
            />
            {/* </div> */}
            <button className="update-board-form_button" type="submit">
              Update Board
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateBoardForm.propTypes = {
  updateBoardCallback: PropTypes.func.isRequired,
};

export default UpdateBoardForm;
