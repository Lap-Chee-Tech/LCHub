import React from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StatusBar } from "react-native";
import { Home } from "./app/views";

export default class App extends React.Component<{}, { isReady: boolean }> {
  constructor(props: any) {
    props = super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container
        style={{
          ...Platform.select({
            ios: {},
            android: { paddingTop: StatusBar.currentHeight }
          })
        }}
      >
        <Home />
      </Container>
    );
  }
}
