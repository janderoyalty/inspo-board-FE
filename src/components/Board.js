import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { URL } from "../App";
import NewCardForm from "./NewCardForm";
import SortMenu from "./SortMenu";
import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ board }) => {
  const [cardData, setCardData] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

  const getCards = () => {
    axios
      .get(`${URL}/boards/${board.id}/cards`)
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
    let order = orderBy === "asc" ? 1 : -1;
    return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
  });

  const validateCardData = (newCardInfo) => {
    if (!newCardInfo["message"]) {
      return alert("New card must have a message!");
    } else if (newCardInfo["message"].length > 40) {
      return alert(
        `Messages cannot be more than 40 characters, yours is ${newCardInfo["message"].length} long!`
      );
    } else return true;
  };

  const addNewCard = (newCard) => {
    validateCardData(newCard) &&
      axios
        .post(`${URL}/boards/${board.id}/cards`, newCard)
        .then((response) => {
          console.log("a new card has been posted");
          const cards = [...cardData, response.data];
          setCardData(cards);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const updateCard = (id, message) => {
    validateCardData({ message }) &&
      axios
        .patch(`${URL}/cards/${id}`, { message })
        .then(() => {
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
        })
        .catch((err) => {
          alert(err);
        });
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
    <div className="board">
      <div className="board--title">
        <h1>{board.title}</h1>
        <h2>by {board.owner}</h2>
      </div>
      <div className="board--content">
        <div className="sort-menu--container">
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
        <div className="cards">
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
        <NewCardForm boardId={board.id} onAddCardCallback={addNewCard} />
      </div>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default Board;
