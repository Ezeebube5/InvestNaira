// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabOne } from '../navigationConfiguration';


const mapStateToProps = (state) => {
 return {
  navigationState: state.tabOne
  };
};
class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab One',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name={'cogs'} color={tintColor} />

  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabOne
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
export default connect(mapStateToProps)(TabOneNavigation);
