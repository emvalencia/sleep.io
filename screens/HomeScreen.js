//-------------------------------------------------------------------------------------------------
// LogScreen takes the data from props and renders it as a graph and list.
//-------------------------------------------------------------------------------------------------
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {
  Text as TextNB,
  List,
  ListItem,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sleepinessActions from '../actions/index';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Daily OVerview'
  };

  constructor(props) {
    super(props);
    this.state = {

      /* tracks hours slept today */
      hours_slept_today: 0,

    };
  }


  render() {
    const { sleepinessData } = this.props.SleepinessReducer; /* contains how sleepy you were that day */
    const { sleepData } = this.props.SleepinessReducer; /* contains the actual dates and days of sleep */
    const { sleepinessDayCount } = this.props.SleepinessReducer; /* contains average sleepiness per day */

    console.log(sleepinessData) 
    console.log(sleepData)
    console.log(sleepinessDayCount)

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
      try {
        var start_date = new Date();
        var start_time = sleepData[0].startTime.split(':');
        start_date.setHours(start_time[0])
        start_date.setMinutes(start_time[1])
        start_date.setSeconds(start_time[2]);

        var end_date = new Date();
        var end_time = sleepData[0].endTime.split(':');
        end_date.setHours(end_time[0])
        end_date.setMinutes(end_time[1])
        end_date.setSeconds(end_time[2]);

        console.log('Date objects:');
        console.log(start_date);
        console.log(end_date);

        console.log('Total sleep in minutes: ');
        var hours = Math.abs(end_date - start_date) / 36e5;
        this.state.hours_slept_today += hours;
      }
      catch {
        console.log('Error caught');
      }
    } else {
      this.state.hours_slept_today = 0;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.chartTitle}>Overview</Text>

        <Text>Total Hours Recorded Today: {this.state.hours_slept_today} </Text>

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001848',
    marginTop: 0
  },
  chartTitle: {
    alignItems: 'center',
    fontSize: 30,
    marginTop: 15,
    marginBottom: 15,
    color: '#14C8B5'
  },
  help: {
    flexDirection: 'row-reverse'
  },
  list: {
    flexDirection: 'row'
  },
  text: {
    width: '33%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
