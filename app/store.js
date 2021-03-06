// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
// Navigation
import { NavigatorTabOne } from './tabOne/navigationConfiguration';
import { NavigatorTabTwo } from './tabTwo/navigationConfiguration';
import { NavigatorTabThree } from './tabThree/navigationConfiguration';
import { TabBar } from './tabBar/navigationConfiguration';
// Middleware
const middleware = () => applyMiddleware(createLogger());
export default createStore(
  combineReducers({
    tabBar: (state, action) => TabBar.router.getStateForAction(action, state),
tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action, state),
tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action, state),
tabThree: (state, action) => NavigatorTabThree.router.getStateForAction(action, state),
  }),
  middleware(),
);
