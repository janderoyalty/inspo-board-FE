import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Forms.css';

const UpdateBoardForm = ({ updateBoardCallback }) => {
    const blankFormData = { title: '', owner: '' };

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

    const shown = hide ? 'hidden' : 'shown';

    return (
        <div>
            <button onClick={() => setHide(!hide)}>
                {(hide ? 'Show' : 'Hide') + ' Update Board Form'}
            </button>
            <div className={shown}>
                <h2>Update Board</h2>
                <form onSubmit={updateBoard}>
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
                    <button type='submit'>Update Board</button>
                </form>
            </div>
        </div>
    );
};

UpdateBoardForm.propTypes = {
    updateBoardCallback: PropTypes.func.isRequired,
};

export default UpdateBoardForm;
