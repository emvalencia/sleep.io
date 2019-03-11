//-------------------------------------------------------------------------------------------------
// LogScreen takes the data from props and renders it as a graph and list.
//-------------------------------------------------------------------------------------------------
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Text as TextNB, List, ListItem } from 'native-base';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sleepinessActions from '../actions/index';

class LogScreen extends React.Component {
  static navigationOptions = {
    title: 'My Stats',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      /* default data in state before user data entered */
      data: [
        {
          day: 'mon',
          average: 5
        },

        {
          day: 'tues',
          average: 5
        },

        {
          day: 'thurs',
          average: 4
        },

        {
          day: 'fri',
          average: 7
        },

        {
          day: 'sat',
          average: 5
        },

        {
          day: 'sun',
          average: 1
        }
      ]
    };
  }

  /* re-renders the VictoryChart when updated */
  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: [...this.state.data]
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  render() {
    const { sleepinessData } = this.props.SleepinessReducer;
    const { sleepData } = this.props.SleepinessReducer;
    const { sleepinessDayCount } = this.props.SleepinessReducer;

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

    let chart = null;
    chart = <Text>Need More Than One Event Logged To Render Charts</Text>;

    /* display data on VictoryChart */
    if (data.length > 0) {
      chart = (
        <VictoryChart domainPadding={{ x: 20 }} animate={{ duration: 500 }}>
          <VictoryBar
            data={this.state.data}
            x="day"
            y="average"
            style={{
              data: { fill: '#906090', width: 12 }
            }}
            barWidth={22}
            categories={{
              x: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: '#906090'
                })
              }
            }}
          />
          <VictoryAxis label="DAY" style={whiteStyle} />
          <VictoryAxis dependentAxis label="" style={whiteStyle} />
        </VictoryChart>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.chartTitle}>My Average Sleepiness</Text>
        {chart}
        <List>
          <ListItem>
            <View style={styles.list}>
              <TextNB style={styles.text}>Date</TextNB>
              <TextNB style={styles.text}> Slept at...</TextNB>
              <TextNB style={styles.text}>Woke up at...</TextNB>
            </View>
          </ListItem>
        </List>
        <List
          dataArray={sleepData}
          renderRow={(sleepData) => (
            <ListItem>
              <View style={styles.list}>
                <TextNB style={styles.text}>{sleepData.startDay}</TextNB>
                <TextNB style={styles.text}>{sleepData.startTime}</TextNB>
                <TextNB style={styles.text}>{sleepData.endTime}</TextNB>
              </View>
            </ListItem>
          )}
        />
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
)(LogScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001848',
    marginTop: 15
  },
  chartTitle: {
    alignItems: 'center',
    fontSize: 30,
    marginBottom: -15,
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

/* victory chart styling */
const whiteStyle = {
  axis: { stroke: 'white' },
  axisLabel: { fontSize: 20, padding: 30, fill: 'white' },
  ticks: { stroke: 'white', size: 5 },
  tickLabels: { fontSize: 15, padding: 5, fill: 'white' },
  grid: { stroke: 'none' }
};
