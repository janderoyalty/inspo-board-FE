import React, { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = ({ onAddCardCallback }) => {
  const [hide, setHide] = useState(true);

  const [cardData, setCardData] = useState({ cardMessage: "" });

  const handleCardMessageChange = (event) => {
    setCardData({ ...cardData, cardMessage: event.target.value });
  };

  const submitCardData = (event) => {
    event.preventDefault();

    onAddCardCallback({
      message: cardData.cardMessage,
    });
    setCardData({ cardMessage: "" });
  };

  const shown = hide ? "hidden" : "shown";

  return (
    <div>
      <button onClick={() => setHide(!hide)}>
        {(hide ? "Show" : "Hide") + " New Card Form"}
      </button>
      <section className={shown}>
        <h1>Add A New Card</h1>
        <form onSubmit={submitCardData}>
          <label className="new-card-label"> Message:</label>
          <input
            className="new-card-input"
            type="text"
            value={cardData.cardMessage}
            onChange={handleCardMessageChange}
          ></input>
          <button className="new-card-submit-button" type="submit">
            submit
          </button>
        </form>
      </section>
    </div>
  );
};

NewCardForm.propTypes = {
  onAddCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
