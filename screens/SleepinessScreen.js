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
    // console.log('Sleepy rating: ', sleepinessRating);
    // console.log('Sleepiness logged: ', sleepinessDate);
    Alert.alert('', this.state.sleepinessRating > 5 ? 'Y U No Sleep?!' : 'U good');

    addLogSleepiness({ sleepinessRating, sleepinessDate, sleepinessDay });
  };

  displayInfo = () => {
    Alert.alert(
      'INFO',
      'Move the slider to rate how sleepy you feel right now on a scale of 1 to 7. 1 = not sleepy at all. 7 = extremely tired. Then click on the "Record My Sleepiness" button below to submit your log!'
    );
  };

  getSliderColor() {
    // use switch to get color
    console.log('this.state :', this.state);
    const { sleepinessRating } = this.state;
    switch (sleepinessRating) {
      case 1:
        return '#906090';
      case 2:
        return '#7B7196';
      case 3:
        return '#67839C';
      case 4:
        return '#5294A3';
      case 5:
        return '#3DA5A9';
      case 6:
        return '#29B7AF';
      case 7:
        return '#14C8B5';
    }
  }

  render() {
    const { sleepinessRating } = this.state;
    const { addLogSleepiness } = this.props;
    // console.log('sleepiness :', this.props.SleepinessReducer);

    const sliderColor = this.getSliderColor();

    console.log('sliderColor :', sliderColor);

    return (
      <View style={styles.container}>
        <View style={styles.help}>
          <ButtonNB transparent light onPress={this.displayInfo}>
            <Icon name="md-question" />
          </ButtonNB>
        </View>

        <View style={styles.slider}>
          <Text style={styles.ratingText}>{String(sleepinessRating)}</Text>
          <Slider
            step={1}
            minimumValue={1}
            maximumValue={7}
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
)(SleepinessScreen); // <--- call the component here

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