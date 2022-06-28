import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, message, like_count, updateLikes, deleteCard }) => {
    return (
        <div className='Card'>
            <p className='Card-message'>{message}</p>
            <p className='Card-likes'>{like_count}💞s</p>
            <div className='Card-buttons'>
                <button onClick={() => updateLikes(id)}>💕 +1</button>
                <button onClick={() => deleteCard(id)}>🗑</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    updateLikes: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default Card;
