//-------------------------------------------------------------------------------------------------
// LogScreen takes the data from props and renders it as a graph and list.
//-------------------------------------------------------------------------------------------------
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sleepinessActions from '../actions/index';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'My Daily Recommendations'
  };

  constructor(props) {
    super(props);
    this.state = {
      /* tracks hours slept today */
      hours_slept_today: 0
    };
  }

  render() {
    const {
      sleepinessData
    } = this.props.SleepinessReducer; /* contains how sleepy you were that day */
    const {
      sleepData
    } = this.props.SleepinessReducer; /* contains the actual dates and days of sleep */
    const {
      sleepinessDayCount
    } = this.props.SleepinessReducer; /* contains average sleepiness per day */

    console.log(sleepinessData);
    console.log(sleepData);
    console.log(sleepinessDayCount);

    /* average sleepiness rating per day -> use for recommendations later 
    const weekAverageMap = new Map();
    sleepinessData.forEach((element) => {
      if (weekAverageMap.has(element.sleepinessDay)) {
        weekAverageMap.set(
          element.sleepinessDay,
          weekAverageMap.get(element.sleepinessDay) + element.sleepinessRating
        );
      } else {
        weekAverageMap.set(element.sleepinessDay, element.sleepinessRating);
      }
    }); 

    const { data } = this.state;

    weekAverageMap.forEach((value, key, map) => {
      const average = weekAverageMap.get(key) / sleepinessDayCount[key];
      data.push({
        day: key,
        average
      });
    });
    */

    /* add total personicle hours for today to total hours */

    /* calculate the total manual sleep hours user has input today */
    if (sleepData.length != 0) {
      /* reset total hours slept */
      this.state.hours_slept_today = 0;

      for (var obj in sleepData) {
        /* get current date */
        var curr_date = new Date();

        if (sleepData[obj].startDay === curr_date.toLocaleDateString()) {
          console.log('strings are the same');

          /* convert start and end dates to objects for comparisons */
          var start_date = new Date();
          var start_time = sleepData[obj].startTime.split(':');
          start_date.setHours(start_time[0]);
          start_date.setMinutes(start_time[1]);
          start_date.setSeconds(start_time[2]);

          var end_date = new Date();
          var end_time = sleepData[obj].endTime.split(':');
          end_date.setHours(end_time[0]);
          end_date.setMinutes(end_time[1]);
          end_date.setSeconds(end_time[2]);

          /* get total hours per day slept */
          var hours = Math.abs(end_date - start_date) / 36e5;
          this.state.hours_slept_today += hours;
        }
      }
    } else {
      this.state.hours_slept_today = 0;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.chartTitle}>
          _____________________________ {'\n\n'}
          Recommendations {'\n'}
          _____________________________ {'\n'}
        </Text>
        <View style={styles.rec_container}>
          <Text style={styles.text}>
            Total Sleep Recorded: {Number(this.state.hours_slept_today).toFixed(1)} hours
          </Text>
        </View>
        <View style={styles.rec_container}>
          <Text style={styles.text}>
            Remaining Sleep:{' '}
            {this.state.hours_slept_today >= 8
              ? 0
              : Number(8 - this.state.hours_slept_today).toFixed(1)}{' '}
            hours{'\n'}
            Recommended Times: {'\n'}
            Recommended Time #1 {'\n'}
            Recommended Time #2 {'\n'}
            Recommended Time #3 {'\n'}
          </Text>
        </View>
      </View>
    );
  }
}

/* redux implementation */
function mapStateToProps(state) {
  console.log('Log screen grabbing mapStateToProps');
  return {
    SleepinessReducer: state.SleepinessReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sleepinessActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#001848',
    marginTop: 0,
    color: 'white',
    fontSize: 15,
    padding: 10
  },
  rec_container: {
    backgroundColor: 'steelblue',
    padding: 15,
    borderRadius: 15,
    marginTop: 15
  },
  chartTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    marginTop: 0,
    marginBottom: 0,
    color: '#906090'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
