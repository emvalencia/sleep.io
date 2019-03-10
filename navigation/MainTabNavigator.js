//-------------------------------------------------------------------------------------------------
// MainTabNavigator.js contains the stack navigator used to create the bottom tab bars.
//-------------------------------------------------------------------------------------------------
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SleepinessScreen from '../screens/SleepinessScreen';
import LogScreen from '../screens/LogScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home'
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#b0e0e6'
    //   },
    //   headerTintColor: '#906090',
    //   headerTitleStyle: {
    //     fontWeight: 'bold'
    //   }
    // }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-home` : 'md-home'} />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Sleep Tracker',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cloud' : 'md-cloud'}
    />
  )
};

const SleepinessStack = createStackNavigator({
  Sleepiness: SleepinessScreen
});

SleepinessStack.navigationOptions = {
  tabBarLabel: 'Sleepiness',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

const LogStack = createStackNavigator({
  Logs: LogScreen
});

LogStack.navigationOptions = {
  tabBarLabel: 'Logs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-folder' : 'md-folder'}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profiles: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-person'}
    />
  )
};

const SearchStack = createStackNavigator({
  Searches: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SleepinessStack,
  LogStack,
  SearchStack,
  ProfileStack
});
