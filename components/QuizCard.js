import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import TextButton from "./TextButton";
import { red, green, white, blue } from "../utils/colors";

class QuizCard extends Component {
  render() {
    const { deck, questionId, showAnswer, flip, mark } = this.props;
    const card = deck.questions[questionId];
    return (
      <View style={styles.container}>
        <Text style={styles.cardText}>
          {showAnswer ? card.answer : card.question}
        </Text>
        {/* Tooggling ShowAnswer button implementation */}
        <TextButton
          onPress={flip}
          style={{ marginTop: 20, marginBottom: 40, fontSize: 15 }}
        >
          {showAnswer ? "Show Question" : "Show Answer"}
        </TextButton>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: green }]}
          onPress={() => mark("correct")}
        >
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => mark("incorrect")}
        >
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardText: {
    fontSize: 25,
    color: blue,
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: red,
    borderRadius: 10,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: white,
    fontSize: 16
  }
});

export default QuizCard;
