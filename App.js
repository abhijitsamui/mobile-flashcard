import React, { Component } from "react";
import { View } from "react-native";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import FlashCardStatusBar from "./components/FlashCardStatusBar";
import Navigator from "./components/Navigator";
import { blue } from "./utils/colors";
import { setLocalNotification } from "./utils/helpers";

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashCardStatusBar backgroundColor={blue} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
