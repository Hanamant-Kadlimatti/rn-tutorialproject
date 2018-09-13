/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Robot from './components/Robot';
// import MultipleGreetings from './components/MultipleGreetings';
import TextBlink from './components/TextBlink';

AppRegistry.registerComponent(appName, () => TextBlink);
