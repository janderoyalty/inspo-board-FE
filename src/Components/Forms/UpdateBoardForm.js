import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Forms.css';
import { AiOutlineForm } from 'react-icons/ai';
import '../Styles/UpdateBoardForm.css';

const UpdateBoardForm = ({ board, updateBoardCallback }) => {
    const [formData, setFormData] = useState({
        title: board.title,
        owner: board.owner,
    });
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
    };

    const shown = hide ? 'hidden' : 'shown';

    return (
        <div>
            <AiOutlineForm
                className='icons'
                size={30}
                onClick={() => setHide(!hide)}>
                {hide ? 'Show' : 'Hide'}
            </AiOutlineForm>
            <div className={shown}>
                <div className='update-board'>
                    <h3>Update Board</h3>
                    <form className='update-board-form' onSubmit={updateBoard}>
                        <label htmlFor='title'>Title</label>
                        <input
                            onChange={updateFormData}
                            name='title'
                            id='title'
                            type='text'
                            value={formData.title}
                        />
                        <label htmlFor='owner'>Owner</label>
                        <input
                            onChange={updateFormData}
                            name='owner'
                            id='owner'
                            type='owner'
                            value={formData.owner}
                        />
                        <div>
                            <button
                                className='update-board-form_button'
                                type='submit'
                                onClick={() => setHide(!hide)}>
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
    board: PropTypes.shape({
        id: PropTypes.number.isRequired,
        owner: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
    updateBoardCallback: PropTypes.func.isRequired,
};

export default UpdateBoardForm;
