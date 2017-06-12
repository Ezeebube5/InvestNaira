import { TabNavigator } from 'react-navigation';
// Screens
import TabThreeScreenOne from './views/TabThreeScreenOne';
import TabThreeScreenTwo from './views/TabThreeScreenTwo';

const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
};
// going to disable the header for now
const tabBarConfiguration = {
  initialRouteName: 'TabThreeScreenOne',
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
export const NavigatorTabThree = TabNavigator(routeConfiguration, tabBarConfiguration);
