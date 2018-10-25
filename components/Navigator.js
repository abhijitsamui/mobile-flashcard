import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { blue, white } from "../utils/colors";
import Deck from "./Deck";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import AddCard from "./AddCard";
import QuizScreen from "./QuizScreen";

//setup tab navigation between the deck list view and the add deck view
const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "DECKLIST",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={25} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "CREATE DECK",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: blue,
      labelStyle: {
        fontSize: 15,
        paddingBottom: 5
      }
    }
  }
);
//set up the stack navigator to navigate from the deck list to deck details and from deck details to AddCard or Quiz
export default createStackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        title: "Quiz Challenge!!"
      }
    },
    Deck: {
      screen: Deck
    },
    AddCard: {
      screen: AddCard
    },
    QuizScreen: {
      screen: QuizScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: blue,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: white
    }
  }
);
