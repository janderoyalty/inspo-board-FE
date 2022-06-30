import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { URL } from '../App';
import NewCardForm from './NewCardForm';
import SortMenu from './SortMenu';
import './Board.css';

const Board = ({ boardId }) => {
    const [cardData, setCardData] = useState([]);
    const [sortBy, setSortBy] = useState('id');
    const [orderBy, setOrderBy] = useState('desc');

    const getCards = () => {
        axios
            .get(`${URL}/boards/${boardId}/cards`)
            .then((response) => {
                const newData = response.data.map((card) => {
                    return {
                        id: card.card_id,
                        message: card.message,
                        likeCount: card.like_count,
                    };
                });
                setCardData(newData);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => getCards(), [cardData]);

    const sortedCards = cardData.sort((a, b) => {
        let order = orderBy === 'asc' ? 1 : -1;
        return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
    });

    const createCard = () => {};

    const updateCard = async (id, message) => {
        try {
            await axios.patch(`${URL}/cards/${id}`, { message });
            const newCardData = cardData.map((card) => {
                if (card.id === id) {
                    return {
                        ...card,
                        [message]: message,
                    };
                } else {
                    return card;
                }
            });
            setCardData(newCardData);
        } catch (err) {
            alert(err);
        }
    };

    const deleteCard = async (id) => {
        try {
            await axios.delete(`${URL}/cards/${id}`);
            const newCardData = cardData.filter((card) => card.id !== id);
            setCardData(newCardData);
        } catch (err) {
            alert(err);
        }
    };

    const updateLikes = async (id) => {
        try {
            await axios.patch(`${URL}/cards/${id}/like`);
            const newCardData = cardData.map((card) => {
                if (card.id === id) {
                    return {
                        ...card,
                        likeCount: card.likeCount + 1,
                    };
                } else {
                    return card;
                }
            });
            setCardData(newCardData);
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div className='board'>
            <div className='sortMenuContainer'>
                <SortMenu
                    sortBy={sortBy}
                    onSortByChange={(sortOption) => {
                        setSortBy(sortOption);
                    }}
                    orderBy={orderBy}
                    onOrderByChange={(orderOption) => {
                        setOrderBy(orderOption);
                    }}
                />
            </div>
            <div className='cards'>
                {sortedCards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            id={card.id}
                            message={card.message}
                            likeCount={card.likeCount}
                            updateLikes={updateLikes}
                            deleteCard={deleteCard}
                            updateCard={updateCard}
                        />
                    );
                })}
            </div>
            {/* <NewCardForm createCardFunction={createCard} /> */}
        </div>
    );
};

export default Board;
