import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillEdit } from "react-icons/ai";
import "../Styles/UpdateBoardForm.css";

const UpdateBoardForm = ({
	updateBoardCallback,
	board,
	formData,
	setFormData,
}) => {
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
		setHide(true);
	};

	const shown = hide ? "hidden" : "shown";

	useEffect(() => {
		setFormData(board);
	}, [board]);

	return (
		<div>
			<AiFillEdit className="icons" size={30} onClick={() => setHide(!hide)} />
			<div className={shown}>
				<div className="update-board">
					<h3>Update Board</h3>
					<form className="update-board-form" onSubmit={updateBoard}>
						<label htmlFor="title">Title</label>
						<input
							onChange={updateFormData}
							name="title"
							id="title"
							type="text"
							value={formData.title}
						/>
						<label htmlFor="owner">Owner</label>
						<input
							onChange={updateFormData}
							name="owner"
							id="owner"
							type="owner"
							value={formData.owner}
						/>
						<div>
							<button
								className="update-board-form_button"
								type="submit"
								onClick={() => setHide(true)}
							>
								Update Board
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

UpdateBoardForm.propTypes = {
	updateBoardCallback: PropTypes.func.isRequired,
	board: PropTypes.shape({
		id: PropTypes.number.isRequired,
		owner: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}),
	formData: PropTypes.string.isRequired,
	setFormData: PropTypes.func.isRequired,
};

export default UpdateBoardForm;
