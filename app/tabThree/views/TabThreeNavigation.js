// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabThree } from '../navigationConfiguration';

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabThree
  };
};
class TabThreeNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Three',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name={'cogs'} color={tintColor} />

  }
render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabThree
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
export default connect(mapStateToProps)(TabThreeNavigation);
