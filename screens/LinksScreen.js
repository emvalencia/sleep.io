/*-------------------------------------------------------------------------------------------------
 * LinkScreen allows you to long your start and end sleep data and passes that data to props to
 * be rendered by LogScreen.
 *-------------------------------------------------------------------------------------------------*/
import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button as ButtonNB, Icon } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sleepActions from '../actions/index';

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'What Time Did You Sleep?'
  };

  state = {
    isStartDateTimePickerVisible: false,
    isEndDateTimePickerVisible: false,
    startTime: '?',
    endTime: '?',
    startDay: ''
  };

  /* listens and updates the state of our component */
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { startDay, startTime, endTime } = this.state;

    if (startTime != '?' && endTime != '?') {
      this.props.addLogSleep({ startDay, startTime, endTime });
      this.confirmSubmission();
      this.setState({ startTime: '?', endTime: '?', startDay: '' });
    }
  }

  //shows the datetime picker
  _showDateTimePicker = (type) => {
    if (type == 'start') {
      this.setState({ isStartDateTimePickerVisible: true });
    } else {
      this.setState({ isEndDateTimePickerVisible: true });
    }
  };

  //hides the datetime picker
  _hideDateTimePicker = () => {
    if (this.state.isStartDateTimePickerVisible) {
      this.setState({
        isStartDateTimePickerVisible: false
      });
    } else {
      this.setState({
        isEndDateTimePickerVisible: false
      });
    }
  };

  //handles events that occur when the start date button is pressed
  _handleDatePickedStart = (date) => {
    const startTime = date.toLocaleTimeString();
    this._hideDateTimePicker();

    this.setState({
      ...this.state,
      startTime: startTime,
      startDay: date.toLocaleDateString()
    });
  };

  //handles events that occur when the end date button is pressed
  _handleDatePickedEnd = (date) => {
    const endTime = date.toLocaleTimeString();
    this._hideDateTimePicker();
    this.setState({ ...this.state, endTime: endTime });
  };

  //displays an info comment about this screen
  displayInfo = () => {
    Alert.alert(
      'INFO',
      'This is a sleep tracker that records when you START sleeping and when you WAKE UP. Just click on the buttons below to record your date and time and click SUBMIT to save it.'
    );
  };

  //Shows an alert that informs the user that their sleep data has been submitted
  confirmSubmission = () => {
    Alert.alert('', 'Submitted sleep data!');
  };

  render() {
    const { startTime } = this.state;
    const { endTime } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.help}>
          <ButtonNB transparent light onPress={this.displayInfo}>
            <Icon name="md-question" />
          </ButtonNB>
        </View>

        <View style={styles.results}>
          <Text style={styles.numEntries}>
            Days Logged: {this.props.SleepinessReducer.sleepData.length}
          </Text>
          <Text style={styles.text}>Sleep Start Time: {startTime}</Text>
          <Text style={styles.text}>Sleep End Time: {endTime}</Text>
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => this._showDateTimePicker('start')}
            title="Log Start Time"
            color="#906090"
            style={{ borderRadius: 5 }}
            hardwareAccelerated
          />
          <Button
            onPress={() => this._showDateTimePicker('end')}
            title="Log End Time"
            color="#906090"
            style={{ borderRadius: 5 }}
            hardwareAccelerated
          />
        </View>

        <DateTimePicker
          isVisible={this.state.isStartDateTimePickerVisible}
          onConfirm={this._handleDatePickedStart}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
          is24Hour={true}
          datePickerModeAndroid="spinner"
        />

        <DateTimePicker
          isVisible={this.state.isEndDateTimePickerVisible}
          onConfirm={this._handleDatePickedEnd}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
          is24Hour={true}
          datePickerModeAndroid="spinner"
        />
      </View>
    );
  }
}

//redux implementation
function mapStateToProps(state) {
  return {
    sleepinessActions: state.sleepinessActions,
    SleepinessReducer: state.SleepinessReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sleepActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#001848'
  },
  help: {
    flexDirection: 'row-reverse'
  },
  numEntries: {
    marginBottom: 25,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20
  },
  results: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});