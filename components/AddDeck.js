import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { saveDeck } from "../utils/api";
import { addDeck } from "../actions";
import { blue, white } from "../utils/colors";

function SubmitButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.SubmitButton} onPress={onPress}>
      <Text style={styles.SubmitButtonText}>Create Deck</Text>
    </TouchableOpacity>
  );
}

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

class AddDeck extends Component {
  state = {
    deckTitle: ""
  };

  toDeck = (id, title) => {
    this.props.navigation.navigate("Deck", { deckId: id, deckName: title });
  };

  onSubmit = () => {
    const { deckTitle } = this.state;
    const title = deckTitle;

    if (!deckTitle.trim()) {
      alert("Please enter a title");
      return;
    }

    const deckId = generateUID();
    const newDeck = {
      title: deckTitle.trim(),
      questions: []
    };

    this.props.dispatch(addDeck(deckId, newDeck));

    this.setState(() => ({ deckTitle: "" }));

    this.toDeck(deckId, title);

    saveDeck(deckId, newDeck);
  };

  render() {
    const { deckTitle } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.question}>
          What do you wana call your new Deck?
        </Text>
        <TextInput
          value={deckTitle}
          style={styles.input}
          onChangeText={deckTitle => this.setState({ deckTitle })}
        />
        <SubmitButton onPress={this.onSubmit} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  question: {
    fontSize: 30,
    marginLeft: 20,
    marginRight: 20,
    color: blue
  },
  input: {
    width: 250,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: blue,
    margin: 20
  },
  SubmitButton: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 5,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 60
  },
  SubmitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

export default connect()(AddDeck);
