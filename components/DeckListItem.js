import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { white, blue, gray } from "../utils/colors";
import { withNavigation } from "react-navigation";

class DeckListItem extends Component {
  render() {
    const { id, title, noOfCard, navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate("Deck", { deckId: id, deckName: title })
        }
      >
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.noOfCard}>
          {noOfCard} {noOfCard === 1 ? `card` : `cards`}
        </Text>
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(decks, props) {
  const { id } = props;
  return {
    id: id,
    title: decks[id].title,
    noOfCard: decks[id].questions.length
  };
}

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 25,
    color: blue
  },
  noOfCard: {
    marginTop: 10,
    fontSize: 20,
    color: gray
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 10,
    borderColor: blue,
    borderWidth: 1,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17
  }
});

export default withNavigation(connect(mapStateToProps)(DeckListItem));
