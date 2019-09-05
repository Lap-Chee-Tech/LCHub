import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar } from 'react-native';


export default class App extends React.Component<{}, {isReady: boolean}> {

  constructor(props:any){
    props=super(props);
    this.state = {
      isReady: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style = {{
        ...Platform.select({
          ios: {},
          android:{paddingTop: StatusBar.currentHeight, paddingLeft: 16}
      })
    }}
      >
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perspiciatis sed adipisci, nesciunt explicabo non omnis, blanditiis numquam dolor a dicta illo reprehenderit hic, ab qui fugit nobis necessitatibus optio!</Text>
      </Container>
    );
  }
}


