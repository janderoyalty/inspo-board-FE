import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import UpdateCardForm from './UpdateCardForm';

const Card = ({
    id,
    message,
    likeCount,
    updateLikes,
    deleteCard,
    updateCard,
}) => {
    return (
        <div className='Card'>
            <p className='Card-message'>{message}</p>
            <p className='Card-likes'>{likeCount}💞s</p>
            <div className='Card-buttons'>
                <button onClick={() => updateLikes(id)}>💕 +1</button>
                <button onClick={() => deleteCard(id)}>🗑</button>
            </div>
            <UpdateCardForm updateCardCallback={updateCard} cardId={id} />
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    updateLikes: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default Card;
