import { AsyncStorage } from "react-native";

export const FLASHCARD_STORAGE_KEY = "Mobiflashcard:flashcards";

let decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  },
  Java: {
    title: "Java",
    questions: [
      {
        question: "What is an Interface?",
        answer:
          "An interface is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface."
      },
      {
        question: "What is Polymorphism?",
        answer:
          "Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object."
      }
    ]
  }
};

function setData() {
  AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
  return decks;
}

export function initData(results) {
  return results === null ? setData() : JSON.parse(results);
}
