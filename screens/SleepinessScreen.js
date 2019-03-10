//-------------------------------------------------------------------------------------------------
// SettingsScreen allows you to record your sleepiness by selecting a number from 1-7 in a slider
// and submits that data to props to be rendered in LogScreen.
//-------------------------------------------------------------------------------------------------
import React from 'react';
import { StyleSheet, Text, View, Slider, Alert, Button } from 'react-native';
import { Button as ButtonNB, Icon } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sleepinessActions from '../actions/index';

class SleepinessScreen extends React.Component {
  static navigationOptions = {
    title: 'How Are You Feeling Right Now?'
  };

  state = {
    sleepinessRating: 4
  };

  change(value) {
    console.log('changing value :', value);
    this.setState(() => {
      return {
        sleepinessRating: parseFloat(value)
      };
    });
  }

  convertDay = (num) => {
    switch (num) {
      case 0:
        return 'sun';
      case 1:
        return 'mon';
      case 2:
        return 'tues';
      case 3:
        return 'wed';
      case 4:
        return 'thurs';
      case 5:
        return 'fri';
      case 6:
        return 'sat';
    }
  };

  _handleSleepinessDate = (addLogSleepiness) => {
    const sleepinessDate = new Date().toLocaleString();
    const sleepinessDay = this.convertDay(new Date().getDay());

    const { sleepinessRating } = this.state;
    Alert.alert('', this.state.sleepinessRating > 6 ? ' :( ' : ' :) ');

    addLogSleepiness({ sleepinessRating, sleepinessDate, sleepinessDay });
  };

  displayInfo = () => {
    Alert.alert(
      'INFO',
      'Move the slider to rate how sleepy you feel right now on a scale of 1 to 10. 1 = not sleepy at all. 10 = extremely tired. Then click on the "Record My Sleepiness" button below to submit your log!'
    );
  };

  getSliderColor() {
    // use switch to get color
    console.log('this.state :', this.state);
    const { sleepinessRating } = this.state;
    switch (sleepinessRating) {
      case 10:
        return '#906090';
      case 9:
        return '#856993';
      case 8:
        return '#797397';
      case 7:
        return '#6E7C9A';
      case 6:
        return '#63869D';
      case 5:
        return '#588FA1';
      case 4:
        return '#4C99A4';
      case 3:
        return '#41A2A8';
      case 2:
        return '#36ACAB';
      case 1:
        return '#2BB5AE';
    }
  }

  render() {
    const { sleepinessRating } = this.state;
    const { addLogSleepiness } = this.props;
    const sliderColor = this.getSliderColor();

    return (
      <View style={styles.container}>
        <View style={styles.help}>
          <ButtonNB transparent light onPress={this.displayInfo}>
            <Icon name="md-help" />
          </ButtonNB>
        </View>

        <View style={styles.slider}>
          <Text style={styles.ratingText}>{String(sleepinessRating)}</Text>
          <Slider
            step={1}
            minimumValue={1}
            maximumValue={10}
            onValueChange={this.change.bind(this)}
            value={sleepinessRating}
            thumbTintColor={sliderColor}
            minimumTrackTintColor={sliderColor}
            maximumTrackTintColor="#14C8B5"
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => this._handleSleepinessDate(addLogSleepiness)}
            title="Record My Sleepiness"
            color="#906090"
            style={{ borderRadius: 5 }}
            hardwareAccelerated
          />
        </View>
      </View>
    );
  }
}

// what we want to listen to
function mapStateToProps(state) {
  return {
    SleepinessReducer: state.SleepinessReducer
  };
}

// what actions do we want to do
function mapDispatchToProps(dispatch) {
  return bindActionCreators(sleepinessActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SleepinessScreen);

/* contains stylesheet for this component */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#001848'
  },
  help: {
    flexDirection: 'row-reverse'
  },
  slider: {
    marginTop: 40,
    padding: 25
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: '#42bff4',
    padding: 25,
    fontSize: 35
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  ratingText: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white'
  }
});
