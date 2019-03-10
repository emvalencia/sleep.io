/*-------------------------------------------------------------------------------------------------
 * ProfileScreen contains the user's personal profile information/static data.
 *-------------------------------------------------------------------------------------------------*/
import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as profileActions from '../actions/index';

class ProfileScreen extends React.Component {
  state = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 31,
    height: 5,
    weight: 125,
    medicalConditions: ['Hypertension', 'Diabetes'],
    data: []
  };

  /* sets user's full name */
  _setFullName = (fn, ln) => {
    this.setState({ firstName: fn });
    this.setState({ lastName: ln });
  };

  /* sets user's age */
  _setAge = (a) => {
    this.setState({ age: a });
  };

  /* sets user's height */
  _setHeight = (h) => {
    this.setState({ height: h });
  };

  /* sets user's weight */
  _setWeight = (w) => {
    this.setState({ weight: w });
  };

  /* add a medical condition to the list */
  _addMedicalCondition = (condi) => {
    this.state.medicalConditions.push(condi);
  };

  /* removes a medical condition to the list */
  _removeMedicalCondition = (condi) => {
    this.state.medicalConditions.pop(condi);
  };

  /* updates user profile information */
  _handleProfileData = (addLogProfile) => {
    const { firstName, lastName, age, height, weight, medicalConditions } = this.state;

    addLogProfile({
      firstName,
      lastName,
      age,
      height,
      weight,
      medicalConditions
    });

    console.log('this.props.sleepData:', this.props.sleepData);
    console.log('this.props.profileData:', this.props.profileData);
  };

  render() {
    const { addLogProfile } = this.props;
    console.log('this.props.SleepinessReducer: ', this.props.SleepinessReducer);
    console.log(
      'this.props.SleepinessReducer.profileData: ',
      this.props.SleepinessReducer.profileData
    );

    const medCondiMap = new Map();

    /* push medical conditions from the array into a map */
    this.state.medicalConditions.forEach((element) => {
      medCondiMap.set('key', element);
    });

    /* pushes medical conditions onto the data object */
    medCondiMap.forEach((value, key, map) => {
      this.state.data.push({
        key,
        value
      });
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/images/robot-dev.png')} />
          <Text style={styles.text}>
            {this.state.firstName} {this.state.lastName}{' '}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>
            Age: {'\t'} {this.state.age} {'\n'}
            Weight: {'\t'} {this.state.weight} {'\n'}
            Height: {'\t'}
            {this.state.height} {'\n'}
            Medical Hx: {'\t'}
            {this.state.medicalConditions.length == 0 ? 'None' : 'Stuff'} {'\n'}
          </Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
          <View>
            <Button
              onPress={() => {
                console.log('Editing info!');
              }}
              title="Edit Profile"
              color="#906090"
              style={{ borderRadius: 5 }}
              hardwareAccelerated
            />
          </View>
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
    fontSize: 25
  }
});
