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
import EditProfileScreen from '../screens/EditProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const LoginStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: {
    screen: HomeScreen
  }
});

LoginStack.navigationOptions = {
  /* successful login will redirect to home */
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-home` : 'md-home'} />
  )
};

// const HomeStack = createStackNavigator(
//   {
//     Home: { screen: HomeScreen },
//   },
//   {
//     initialRouteName: 'Home'
//     // defaultNavigationOptions: {
//     //   headerStyle: {
//     //     backgroundColor: '#b0e0e6'
//     //   },
//     //   headerTintColor: '#906090',
//     //   headerTitleStyle: {
//     //     fontWeight: 'bold'
//     //   }
//     // }
//   }
// );

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-home` : 'md-home'} />
//   )
// };

const LinksStack = createStackNavigator({
  Links: { screen: LinksScreen }
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
  Sleepiness: { screen: SleepinessScreen }
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
  Logs: { screen: LogScreen }
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
  Profile: { screen: ProfileScreen },
  EditProfile: {
    screen: EditProfileScreen
  }
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
  Searches: { screen: SearchScreen }
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
  LoginStack,
  // HomeStack,
  LinksStack,
  SleepinessStack,
  LogStack,
  SearchStack,
  ProfileStack
});
