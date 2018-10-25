import { AsyncStorage } from "react-native";
import { initData, FLASHCARD_STORAGE_KEY } from "./deckasyncstorage";

//getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(initData);
}

//getDeck: take in a single id argument and return the deck associated with that id.

export function getDeck(deckId) {
  const deckData = getDecks();
  return deckData[deckId];
}
export function saveDeck(key, deck) {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [key]: deck
    })
  );
}

export function saveCard(key, question, answer) {
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(result => {
    let decks = JSON.parse(result);
    decks[key].questions.push({ question: question, answer: answer });
    AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
  });
}
