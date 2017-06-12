import { TabNavigator } from 'react-navigation';
// Screens
import TabTwoScreenOne from './views/TabTwoScreenOne';
import TabTwoScreenTwo from './views/TabTwoScreenTwo';

const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabTwoScreenOne',
  tabBarComponent: 'TabBarTop',
    tabBarPosition: 'top',
    swipeEnabled: false,
    animationEnabled: false,


tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'green',
// background color is for the tab component
    activeBackgroundColor: 'green',
    inactiveBackgroundColor: 'white',
  }
};
export const NavigatorTabTwo = TabNavigator(routeConfiguration, tabBarConfiguration);
