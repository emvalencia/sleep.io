import React from 'react';
import { Icon } from 'native-base';
import { Button, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from 'react-native-searchbar';
this._handleLogin = () => {
  console.log('Nothing yet!');
};

export 
default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = { search: '',};

  _handleResults(results)
  {
    this.setState({results});
  };


  render() {
    const {search } =this.state;
  const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];

    return (
      <View style={styles.container}>
      
        <Text style={styles.text}>Search Screen</Text>
     <SearchBar
            ref={(ref) => this.searchBar = ref}
            data = {items}
            handleResults={this._handleResults}
            
            showOnLoad


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
}

);