/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Robot from './components/Robot';
// import MultipleGreetings from './components/MultipleGreetings';
// import TextBlink from './components/TextBlink';
// import RnStylesheet from './components/RnStylesheet'
// import CustomizeWidthHeightFixedDimension from './components/CustomizeWidthHeightFixedDimension'
// import CustomizeWidthHeightFlexDimension from './components/CustomizeWidthHeightFlexDimension'
// import FlexdirectionRowAndJustifycontentWithFlexbox from './components/FlexdirectionRowAndJustifycontentWithFlexbox'
// import FlexdirectionColumnAndJustifycontentWithFlexbox from './components/FlexdirectionColumnAndJustifycontentWithFlexbox'
// import FlexLayoutWithAlignitems from './components/FlexLayoutWithAlignitems'
// import TextInputEmailPassword from './components/TextInputEmailPassword'
// import ButtonDisplayHandle from './components/ButtonDisplayHandle'
// import TouchableHilight from './components/TouchableHilight'
import BasicScrollView from './components/BasicScrollView'


AppRegistry.registerComponent(appName, () => BasicScrollView);
