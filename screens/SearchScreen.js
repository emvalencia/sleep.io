import React from 'react';
import { Icon } from 'native-base';
import { Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from 'react-native-searchbar';
import { Linking } from 'react-native';
import url_db from '../assets/articles/search.js';
this._handleLogin = () => {
  console.log('Nothing yet!');
};

var map = new Map(Object.entries(url_db['data']));
/*
map.set('sleep apnea', ['title', 'https://www.reg.uci.edu/perl/WebSoc']);
map.set('sleep death syndrome', [
  'title2',
  'https://www.cdc.gov/features/sleep-heart-health/index.html'
]);
map.set('sleep sadness', [
  'title3',
  'https://stackoverflow.com/questions/30540252/display-hyperlink-in-react-native-app'
]);
*/
const items = Array.from(map.keys());

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'More Information',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  };

  constructor(props) {
    super(props);
    this.state = { items, results: [] };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }

  _handleLink = (link) => {
    console.log('link: ', link);
    Linking.openURL(link);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar
            ref={(ref) => (this.searchBar = ref)}
            data={items}
            handleResults={this._handleResults}
            showOnLoad
          />
        </View>
        <ScrollView style={styles.linkContainer}>
          {this.state.results.map((result, i) => {
            var link = map.get(result)[1].toString();
            var title = map.get(result)[0].toString();
            return (
              <Text
                onPress={() => this._handleLink(link)}
                style={styles.searchResult}
                key={i}
              >
                {typeof result === 'object' && !(result instanceof Array)
                  ? 'no results'
                  : title}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001848',
    color: 'white',
    fontSize: 15,
    padding: 10
  },
  text: {
    color: 'white',
    fontSize: 25,
    paddingTop: 10
  },
  buttonRow: {
    width: '80%',
    marginBottom: 15,
    marginTop: 15
  },
  button: {
    padding: 20,
    fontSize: 30
  },
  searchBar: {
    padding: 0
  },
  searchResult: {
    margin: 20,
    padding: 2,
    fontSize: 22,
    color: 'white'
  },
  linkContainer: {
    marginTop: 60
  }
});
