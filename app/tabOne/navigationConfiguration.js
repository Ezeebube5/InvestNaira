import { TabNavigator } from 'react-navigation';
// Screens
import TabOneScreenOne from './views/TabOneScreenOne';
import TabOneScreenTwo from './views/TabOneScreenTwo';

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabOneScreenOne',
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
export const NavigatorTabOne = TabNavigator(routeConfiguration, tabBarConfiguration);
