//-------------------------------------------------------------------------------------------------
// Homescreen contains the main homepage component with a login and signup button (not yet
// implemented).
//-------------------------------------------------------------------------------------------------
import React from 'react';
import { Icon } from 'native-base';
import { Button, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>How much sleep you've logged so far today</Text>
        </View>
        <View>
          <Text style={styles.text}>How much sleep/certain times recommended</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001848'
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonRow: {
    width: '80%',
    marginBottom: 15,
    marginTop: 15
  },
  button: {
    padding: 25,
    fontSize: 40
  }
});