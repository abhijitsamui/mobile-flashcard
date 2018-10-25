import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from "./types";

export const addDeck = (deckId, deck) => {
  return {
    type: ADD_DECK,
    deckId,
    deck
  };
};

export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const addCard = (deckId, question, answer) => {
  return {
    type: ADD_CARD,
    deckId,
    question,
    answer
  };
};
