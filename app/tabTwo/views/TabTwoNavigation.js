// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabTwo } from '../navigationConfiguration';

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabTwo
  };
};
class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Two',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name={'cogs'} color={tintColor} />
  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabTwo
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState
          })
        }
      />
    );
  }
}
export default connect(mapStateToProps)(TabTwoNavigation);
