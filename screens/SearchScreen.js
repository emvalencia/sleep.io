import React from 'react';
import { Icon } from 'native-base';
import { Button, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from 'react-native-searchbar';
this._handleLogin = () => {
  console.log('Nothing yet!');
};

const items = [
  1337,
  1234,
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




export 
default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };



 constructor(props)
 {
  super(props);
  this.state = { items, results: []};
  this._handleResults = this._handleResults.bind(this);
 }
  



_handleResults(results)
  {
    this.setState({results});
  }




  render() {

    return (
    <View style = {{marginTop:30}}> 
        <View style={styles.container}>
          {
              this.state.results.map((result,i) => {
                return(
                  <Text key={i}>
                      {typeof result === 'object' && !(result instanceof Array) ? 'no results' : result.toString()}
                  </Text>
                    );
              })
          }

      
      </View>  
        
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
    backgroundColor: '#001848',
    marginTop:90
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