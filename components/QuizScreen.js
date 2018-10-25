import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { blue } from "../utils/colors";
import QuizCard from "./QuizCard";
import QuizScoreCard from "./QuizScoreCard";

class Quiz extends Component {
  state = {
    questionId: 0,
    correct: 0,
    incorrect: 0,
    showAnswer: false,
    viewResult: false
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  toggleButtonHandler = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }));
  };

  onAnswer = result => {
    this.setState(state => ({
      questionId: state.questionId + 1,
      correct: result === "correct" ? state.correct + 1 : state.correct,
      incorrect: result === "incorrect" ? state.incorrect + 1 : state.incorrect,
      showAnswer: false
    }));
  };

  reset = () => {
    this.setState(() => ({
      questionId: 0,
      correct: 0,
      incorrect: 0,
      showAnswer: false,
      viewResult: false
    }));
  };

  render() {
    const { deckId, deck } = this.props;
    const { questionId, showAnswer, correct, incorrect } = this.state;
    const showCard = questionId < deck.questions.length ? true : false;

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
          {showCard ? questionId + 1 : questionId}/{deck.questions.length}
        </Text>
        {showCard ? (
          <QuizCard
            deck={deck}
            questionId={questionId}
            showAnswer={showAnswer}
            flip={this.toggleButtonHandler}
            mark={this.onAnswer}
          />
        ) : (
          <QuizScoreCard
            deckId={deckId}
            deck={deck}
            correct={correct}
            incorrect={incorrect}
            reset={this.reset}
          />
        )}
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
  counter: {
    marginTop: 10,
    marginLeft: 10,
    color: blue,
    fontSize: 18,
    alignSelf: "flex-start"
  }
});

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deckId,
    deck: state[deckId]
  };
}

export default connect(mapStateToProps)(Quiz);
