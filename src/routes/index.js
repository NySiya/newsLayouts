import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from '../views/Home';
import SideBar from '../views/SideBar';

const drawer = StackNavigator({
  DrawerScreen: {
    screen: Home,
  },
}, {
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      color: '#FFFFFF',
      fontSize: 18,
      ...Platform.select({
        ios: {
          justifyContent: 'center',
          alignSelf: 'center',
        },
        android: {
          justifyContent: 'flex-start',
          alignSelf: 'flex-start',
        }
      }),
    },
    headerStyle: {
      height: 56,
      backgroundColor: '#34ace2',
      borderBottomWidth: 0,
      shadowColor: '#999',
      shadowOpacity: 0.9,
      shadowOffset: { width: 0, height: 1 },
      elevation: 1,
    },
  }
})

const drawerInitializer = DrawerNavigator(
  {
    ApplianceStackNavigator: {
      screen: drawer,
    },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
)

drawerInitializer.navigationOptions = {
  header: null,
};

const Routes = StackNavigator({
  drawerInitializer: {
    screen: drawerInitializer,
  },
});

export { Routes }
