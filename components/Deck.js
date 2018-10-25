import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { connect } from "react-redux";
import { white, blue, green, gray } from "../utils/colors";

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckName } = navigation.state.params;
    return {
      title: deckName
    };
  };

  state = {
    opacity: new Animated.Value(0),
    flex: new Animated.Value(0)
  };

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  render() {
    const { deckId } = this.props;
    const { title, questions } = this.props.deck;
    const { opacity } = this.state;

    return (
      <Animated.View style={[styles.deck, { opacity }]}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.noOfCard}>
          {questions.length} {questions.length === 1 ? `card` : `cards`}
        </Text>
        <TouchableOpacity
          style={[styles.button, { marginTop: 50 }]}
          onPress={() =>
            this.props.navigation.navigate("AddCard", { deckId: deckId })
          }
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: green, borderColor: green }
          ]}
          onPress={() =>
            questions.length === 0
              ? alert("Please add some cards!")
              : this.props.navigation.navigate("QuizScreen", { deckId: deckId })
          }
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId,
    deck: state[deckId]
  };
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  deckTitle: {
    fontSize: 30,
    color: blue
  },
  noOfCard: {
    marginTop: 10,
    fontSize: 25,
    color: gray
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: blue,
    borderRadius: 10,
    borderColor: blue,
    borderWidth: 1,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    color: white
  }
});
export default connect(mapStateToProps)(Deck);
