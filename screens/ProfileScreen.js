/*-------------------------------------------------------------------------------------------------
 * ProfileScreen contains the user's personal profile information/static data.
 *-------------------------------------------------------------------------------------------------*/
import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as profileActions from '../actions/index';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'My Account',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  };

  state = {
    /* variable to force reload of props after editing profile*/
    reload: false,
    mapCondis: true,
    data: [
      {
        key: 'Clinically Insane'
      },
      {
        key: 'Kidney Failure'
      },
      {
        key: 'HIV'
      }
    ]
  };

  /* re-renders the data updated */
  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        reload: this.state.reload
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  render() {
    const { profileData } = this.props.SleepinessReducer;
    // console.log('Profile data: ', this.props.SleepinessReducer.profileData);

    /* push medical conditions from the array into a map */
    const medCondiMap = new Map();
    if (profileData.medicalConditions.length != 0) {
      // console.log('medical conditions: ', profileData.medicalConditions);
      for (var i in profileData.medicalConditions) {
        medCondiMap.set('key', profileData.medicalConditions[i]);
        // console.log('key', profileData.medicalConditions[i]);
      }
      // console.log('Attempting to map conditions');
      // profileData.medicalConditions.forEach((element) => {
      //   medCondiMap.set('key', element);
      // });

      // /* pushes medical conditions onto the data object */
      // medCondiMap.forEach((value, key, map) => {
      //   this.state.data.push({
      //     key,
      //     value
      //   });
      // });
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/images/robot-dev.png')} />
          <Text style={styles.text}>
            {profileData.firstName} {profileData.lastName}{' '}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>
            Age: {'\t'} {profileData.age} {'\n'}
            Sex: {'\t'} {profileData.sex} {'\n'}
            Weight: {'\t'} {profileData.weight} {'\n'}
            Height: {'\t'}
            {profileData.height} {'\n'}
            Medical Hx: {'\t'}
            {this.state.data.length == 0 ? 'None' : ''}
          </Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text style={styles.listText}>{item.key}</Text>}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('EditProfile')}
            title="Edit Profile"
            color="#906090"
            style={{ borderRadius: 5 }}
            hardwareAccelerated
          />
        </View>
      </View>
    );
  }
}

/* redux implementation */
function mapStateToProps(state) {
  return {
    SleepinessReducer: state.SleepinessReducer,
    profileActions: state.profileActions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(profileActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);

/* contains stylesheet for this component */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001848',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    color: 'black',
    paddingTop: 15
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },
  infoText: {
    color: 'white',
    fontSize: 25,
    padding: 15
  },
  listText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 30
  },
  button: {
    flexDirection: 'column',
    color: '#42bff4',
    padding: 25,
    fontSize: 35
  }
});
