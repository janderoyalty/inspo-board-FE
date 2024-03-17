import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdAddBox } from "react-icons/md";
import "../Styles/NewCardForm.css";

const NewCardForm = ({ board, onAddCardCallback }) => {
	const [hide, setHide] = useState(true);

	const [cardData, setCardData] = useState("");

	const handleCardMessageChange = (event) => {
		setCardData({ ...cardData, cardMessage: event.target.value });
	};

	const submitCardData = (event) => {
		event.preventDefault();

		onAddCardCallback({
			message: cardData,
		});
		setCardData("");
	};

	const shown = hide ? "hidden" : "shown";

	return (
		<div>
			<MdAddBox className="icons" size={30} onClick={() => setHide(!hide)}>
				{hide ? "Show" : "Hide"}
			</MdAddBox>
			<section className={shown}>
				<div className="add-card">
					<h3>Add New Card</h3>
					<form className="add-card-form" onSubmit={submitCardData}>
						<label className="new-card-label"> Message</label>
						{/* Update value attribute to use cardData state */}
						<input
							className="new-card-input"
							type="text"
							value={cardData}
							onChange={handleCardMessageChange}
						></input>
						<div>
							<button
								className="add-card-form_button"
								type="submit"
								onClick={() => setHide(!hide)}
							>
								Add Card
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

NewCardForm.propTypes = {
	onAddCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
