import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineForm } from "react-icons/ai";

const UpdateCardForm = ({ updateCardCallback, cardId, oldMessage }) => {
	const [message, setMessage] = useState(oldMessage);
	const [hide, setHide] = useState(true);

	const updateFormData = (e) => {
		setMessage(e.target.value);
	};

	const updateCard = (e) => {
		e.preventDefault();
		console.log("Updating card with ID:", cardId, "and message:", message);
		updateCardCallback(cardId, message);
		setHide(true);
		setMessage("");
	};

	const shown = hide ? "hidden" : "shown";

	return (
		<div>
			<AiOutlineForm
				className="card-icons"
				size={20}
				onClick={() => setHide(!hide)}
			>
				{hide ? "Show" : "Hide"}
			</AiOutlineForm>
			<div className={shown}>
				<form onSubmit={updateCard}>
					<label htmlFor="message">Message</label>
					<input
						maxlength="40"
						onChange={updateFormData}
						name="title"
						id="title"
						type="text"
						value={message}
					/>
					<button type="submit">Update</button>
				</form>
			</div>
		</div>
	);
};

UpdateCardForm.propTypes = {
	updateCardCallback: PropTypes.func.isRequired,
	cardId: PropTypes.number.isRequired,
	oldMessage: PropTypes.string.isRequired,
};

export default UpdateCardForm;
