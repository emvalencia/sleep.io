import React from 'react';
import { Icon } from 'native-base';
import { Button, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {SearchBar} from 'react-native-elements';
this._handleLogin = () => {
  console.log('Nothing yet!');
};

export 
default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = { search: ''.};

  updateSearch = search => 
  {
    this.setState({search});
  };

  render() {
    const {search } =this.state;

    return (
      <View style={styles.container}>
      
        <Text style={styles.text}>Search Screen</Text>
     <SearchBar
            placeholder = "Search..."
            onChangeText={this.updateSearch} 
            value={search}

      />

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